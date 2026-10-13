/** First focusable element on the page: jumps keyboard users past the header. */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="fixed start-4 top-3 z-50 -translate-y-20 rounded-full bg-ink px-4 py-2 text-[14px] font-medium text-ink-fg transition-transform focus-visible:translate-y-0"
    >
      Skip to content
    </a>
  );
}
