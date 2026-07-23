import type { ContactFormPayload, SiteContent } from "../types/content";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Request to ${path} failed (${res.status}): ${body}`);
  }

  return res.json() as Promise<T>;
}

export function getSiteContent(): Promise<SiteContent> {
  return request<SiteContent>("/api/content");
}

export function submitContact(payload: ContactFormPayload) {
  return request("/api/contact", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
