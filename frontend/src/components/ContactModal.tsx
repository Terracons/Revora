import { useState, type ChangeEvent, type FormEvent } from "react";
import { submitContact } from "../api/client";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

type Status = "idle" | "submitting" | "success" | "error";

const initialForm = { name: "", email: "", phone: "", company: "", message: "" };

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (!open) return null;

  const handleChange = (field: keyof typeof form) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    try {
      await submitContact({ ...form, source: "discovery_call_modal" });
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  const handleClose = () => {
    setStatus("idle");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-brand-ink">Book a Free Discovery Call</h3>
            <p className="mt-1 text-sm text-gray-500">
              Tell us a bit about your business and we'll follow up shortly.
            </p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close"
            className="text-gray-400 hover:text-gray-600"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        {status === "success" ? (
          <div className="mt-6 rounded-lg bg-green-50 p-4 text-sm text-green-700">
            Thanks! Your request has been received — we'll be in touch soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              required
              placeholder="Full name"
              value={form.name}
              onChange={handleChange("name")}
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none"
            />
            <input
              required
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange("email")}
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none"
            />
            <input
              placeholder="Phone (optional)"
              value={form.phone}
              onChange={handleChange("phone")}
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none"
            />
            <input
              placeholder="Company (optional)"
              value={form.company}
              onChange={handleChange("company")}
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none"
            />
            <textarea
              placeholder="What are you looking to achieve? (optional)"
              value={form.message}
              onChange={handleChange("message")}
              rows={3}
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none"
            />

            {status === "error" && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue-dark disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
