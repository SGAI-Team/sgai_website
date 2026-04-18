import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from "web-vitals";

const report = (metric: Metric) => {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "web_vitals", {
    metric_name: metric.name,
    metric_value: Math.round(
      metric.name === "CLS" ? metric.value * 1000 : metric.value,
    ),
    metric_rating: metric.rating,
    metric_id: metric.id,
    metric_delta: Math.round(metric.delta),
    non_interaction: true,
  });
};

export const initWebVitals = () => {
  if (typeof window === "undefined") return;
  try {
    onCLS(report);
    onFCP(report);
    onINP(report);
    onLCP(report);
    onTTFB(report);
  } catch {
    /* ignore */
  }
};
