/** Formats an ISO date (YYYY-MM-DD) for display. Fixed input and time zone, so it's safe to prerender. */
export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${iso}T00:00:00Z`),
  );
}
