import { useEffect, useState } from "react";
import { getSiteContent } from "../api/client";
import type { SiteContent } from "../types/content";

interface UseContentResult {
  content: SiteContent | null;
  loading: boolean;
  error: string | null;
}

/**
 * Fetches the landing page copy from the FastAPI content endpoint.
 * Keeping this as one hook means every section reads from a single
 * source of truth and re-renders once when the data arrives.
 */
export function useContent(): UseContentResult {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    getSiteContent()
      .then((data) => {
        if (!cancelled) setContent(data);
      })
      .catch((err: Error) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { content, loading, error };
}
