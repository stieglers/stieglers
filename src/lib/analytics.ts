type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

/**
 * Provider-agnostic analytics facade.
 * Hook your preferred analytics SDK here after consent.
 */
export function trackEvent(event: string, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;

  const consent = window.localStorage.getItem("syntrax-cookie-consent");
  if (consent) {
    try {
      const parsed = JSON.parse(consent) as { analytics?: boolean };
      if (!parsed.analytics) return;
    } catch {
      return;
    }
  } else {
    return;
  }

  window.dispatchEvent(
    new CustomEvent("syntrax:analytics", {
      detail: { event, payload, ts: Date.now() },
    }),
  );
}