# Revora Agency — Landing Page

A recreation of the Revora Agency landing page (from the Anima/Figma "NEXA" design) built as a real full-stack app: a React + TypeScript frontend and a FastAPI backend, instead of a single static HTML file.

## Why this architecture

The page itself is content-driven marketing copy (hero, stats, services, testimonials, FAQ) plus one interactive action: capturing a lead through "Book a Free Discovery Call" / "Contact Us". That shape drove three decisions:

- **Content lives in the backend, not hardcoded in JSX.** The frontend calls `GET /api/content` once and renders every section from the response. Today that data is a Python dict; tomorrow it can move to a CMS or database without touching a single component.
- **Leads are real data, not a mailto link.** The contact/discovery-call form posts to `POST /api/contact`, which validates and persists it via SQLAlchemy to SQLite. Swap the database URL for Postgres in production — no code changes needed.
- **Frontend and backend are independently deployable.** The frontend is a static Vite build (deploy to Vercel/Netlify/S3+CloudFront). The backend is a stateless FastAPI service (deploy to Render/Railway/Fly.io) behind CORS restricted to the frontend's origin.

## Folder structure

```
Reveora/
├── frontend/                  React + TypeScript + Tailwind (Vite)
│   ├── src/
│   │   ├── api/client.ts      fetch wrapper — getSiteContent(), submitContact()
│   │   ├── hooks/useContent.ts  loads page content once on mount
│   │   ├── types/content.ts   TypeScript types mirroring the API schema
│   │   └── components/        one component per landing-page section
│   │       ├── Navbar.tsx, Hero.tsx, Stats.tsx, ProblemSection.tsx
│   │       ├── PartnerSection.tsx, Services.tsx, ProcessSteps.tsx
│   │       ├── Testimonials.tsx, FAQ.tsx, CTA.tsx, Footer.tsx
│   │       ├── ContactModal.tsx  lead-capture form, calls the API
│   │       └── icons.tsx      small inline SVG icon set for services
│   ├── index.html, vite.config.ts, tailwind.config.js, tsconfig.json
│   └── package.json
│
├── backend/                    FastAPI + SQLAlchemy
│   ├── app/
│   │   ├── main.py             app factory, CORS, router registration
│   │   ├── config.py           env-driven settings (CORS origins, DB URL)
│   │   ├── database.py         SQLAlchemy engine/session setup
│   │   ├── models.py           ContactSubmission ORM model
│   │   ├── schemas.py          Pydantic request/response models
│   │   ├── data/content.py     the landing page copy (single source of truth)
│   │   └── routers/
│   │       ├── content.py      GET /api/content
│   │       └── contact.py      POST /api/contact, GET /api/contact (admin)
│   └── requirements.txt
│
└── README.md                   this file
```

## API contract

| Method | Path            | Purpose                                              |
|--------|-----------------|-------------------------------------------------------|
| GET    | `/api/health`   | Liveness check                                        |
| GET    | `/api/content`  | Full page copy (hero, stats, services, testimonials, FAQ, CTA) |
| POST   | `/api/contact`  | Submit a lead (name, email, phone, company, message)  |
| GET    | `/api/contact`  | List submitted leads *(no auth yet — see Next steps)* |

`GET /api/content` returns one JSON object so the page can render after a single round trip; see `backend/app/schemas.py: SiteContent` for the exact shape and `frontend/src/types/content.ts` for the matching TypeScript types.

## Data flow

1. Frontend loads → `useContent()` hook calls `GET /api/content`.
2. FastAPI returns the `SITE_CONTENT` dict, validated against the `SiteContent` Pydantic schema.
3. Each section component (`Hero`, `Stats`, `Services`, …) receives its slice of that data as props — no component fetches independently.
4. Clicking "Book a Free Discovery Call" or "Contact Us" opens `ContactModal`, which posts to `POST /api/contact`.
5. FastAPI validates the payload (`ContactCreate` schema), stores it via SQLAlchemy in SQLite (`revora.db`), and returns the saved record.

## Running it locally

**Backend**

```bash
cd backend
python -m venv .venv && source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload --port 8000
```

**Frontend** (separate terminal)

```bash
cd frontend
npm install
cp .env.example .env      # VITE_API_URL=http://localhost:8000
npm run dev
```

Visit `http://localhost:5173`. The backend auto-creates `revora.db` (SQLite) on first run — no migration step needed for this scope.

> Note: this scaffold was built and syntax-checked in a network-restricted sandbox (no access to PyPI/npm registries), so `pip install` / `npm install` haven't been run end-to-end yet. Run the commands above locally to pull dependencies and do a first real build — flag anything that surfaces and I'll fix it.

## Design notes

- Colors: near-black (`#0A0A0A`) for dark sections/text, blue accent (`#2563EB`) for CTAs/highlights, matching the source design.
- Images used in the hero collage, partner section, and testimonials are Unsplash placeholders — swap in real photography/brand assets via the `image` fields in `backend/app/data/content.py` (testimonials) or directly in the relevant component (hero collage, partner section).
- The FAQ accordion, mobile nav toggle, and contact modal are the only client-side interactive state; everything else is presentational.

## Deploying (frontend on Vercel, backend on Render)

**Backend → Render**

1. Push this repo to GitHub, then in Render: **New → Blueprint**, point it at the repo. It reads [`render.yaml`](render.yaml) and provisions a free Postgres database plus the `revora-backend` web service in one step.
2. After the first deploy, set the `CORS_ORIGINS` env var on the `revora-backend` service to your Vercel URL (e.g. `https://revora.vercel.app`) and redeploy — it's left blank in the blueprint since the Vercel URL doesn't exist yet on the first pass.
3. Note the service URL Render assigns (e.g. `https://revora-backend.onrender.com`) — the frontend needs it.
4. Render's free Postgres expires after 30 days; upgrade the plan in `render.yaml` (or the dashboard) before that if this is more than a demo.

**Frontend → Vercel**

1. Import the same repo in Vercel. Framework preset (Vite) is auto-detected; set **Root Directory** to `frontend` in the project's Settings → General (this is a monorepo, so Vercel needs to be told where the app lives).
2. Add an environment variable `VITE_API_URL` = the Render backend URL from above (no trailing slash), for all environments you plan to use.
3. Deploy. Vercel runs `npm run build` (`tsc -b && vite build`) and serves the static `dist/` output from its CDN — no server-side code runs on Vercel for this app.

**Free-tier caveat:** Render's free web services spin down after 15 minutes of inactivity and take ~30–60s to wake on the next request — the first contact-form submission after idle time will feel slow. Upgrade to a paid instance to avoid that if this goes live for real traffic.

## Email notifications

When a lead is submitted, `POST /api/contact` fires a background task (`app/email.py`) that emails the site owner via [Resend](https://resend.com). It's fire-and-forget: the lead is saved and the API responds regardless of whether the email send succeeds, and it silently no-ops if `RESEND_API_KEY` isn't set (e.g. local dev).

**Setup**

1. Sign up at resend.com and create an API key.
2. Set these env vars (`backend/.env` locally, or the Render service's Environment tab in production):
   - `RESEND_API_KEY` — the key from Resend.
   - `NOTIFY_EMAIL` — where lead notifications should land (e.g. your inbox).
   - `FROM_EMAIL` — defaults to `Revora <onboarding@resend.dev>`, Resend's shared test sender that works with zero setup but only delivers to the email address you signed up with. To send to any address, verify your own domain in Resend and change this to `Revora <leads@yourdomain.com>`.
3. Each notification email has `reply_to` set to the lead's email, so replying from your inbox goes straight to them.

## Next steps / extensions

- Add auth (even a simple API key) in front of `GET /api/contact` before it's used beyond local development.
- Swap SQLite for Postgres by changing `DATABASE_URL` — the SQLAlchemy models don't need to change.
- Add a CI step running `npm run build` and `pytest`/`ruff` once tests exist.
