import { trackEvent } from "./analytics";

export const initScrollDepth = () => {
  if (typeof window === "undefined") return;

  const thresholds = [25, 50, 75, 100];
  const fired = new Set<number>();

  const check = () => {
    const doc = document.documentElement;
    const scrolled = window.scrollY + window.innerHeight;
    const total = doc.scrollHeight;
    if (total <= 0) return;
    const pct = Math.min(100, Math.round((scrolled / total) * 100));
    for (const t of thresholds) {
      if (pct >= t && !fired.has(t)) {
        fired.add(t);
        trackEvent("scroll_depth", { percent: t });
      }
    }
    if (fired.size === thresholds.length) {
      window.removeEventListener("scroll", onScroll);
    }
  };

  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        check();
        ticking = false;
      });
      ticking = true;
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
};
