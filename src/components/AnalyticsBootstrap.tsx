"use client";

import { useEffect } from "react";
import { captureUtmParams } from "@/lib/utm";
import { initWebVitals } from "@/lib/web-vitals";
import { initScrollDepth } from "@/lib/scroll-depth";

/**
 * Inicializa analytics del lado cliente tras hidratación:
 * - captureUtmParams persistidos 30d en localStorage
 * - web-vitals reales (CLS/FCP/INP/LCP/TTFB) → GA4 event 'web_vitals'
 * - scroll_depth 25/50/75/100 → GA4
 * - Microsoft Clarity: carga tras primera interacción si NEXT_PUBLIC_CLARITY_ID existe
 *
 * GA4 + Google Ads gtag se cargan via <Script/> en layout.tsx con strategy
 * lazyOnload para no bloquear LCP.
 */
export function AnalyticsBootstrap() {
  useEffect(() => {
    captureUtmParams();
    initWebVitals();
    initScrollDepth();

    const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
    if (clarityId) {
      const load = () => {
        const s = document.createElement("script");
        s.async = true;
        s.innerHTML = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarityId}");`;
        document.head.appendChild(s);
      };
      const events = ["pointerdown", "scroll", "keydown", "touchstart"] as const;
      const once = { once: true, passive: true } as const;
      for (const e of events) window.addEventListener(e, load, once);
      setTimeout(load, 12000);
    }
  }, []);

  return null;
}
