const ADS_ID = process.env.NEXT_PUBLIC_ADS_ID || "";
const LABEL_LEAD = process.env.NEXT_PUBLIC_ADS_LABEL_LEAD || "";
const LABEL_WHATSAPP = process.env.NEXT_PUBLIC_ADS_LABEL_WHATSAPP || "";
const LABEL_PHONE = process.env.NEXT_PUBLIC_ADS_LABEL_PHONE || "";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const trackLead = (payload: Record<string, unknown> = {}) => {
  window.gtag?.("event", "generate_lead", {
    currency: "CLP",
    value: 100000,
    ...payload,
  });
  if (ADS_ID && LABEL_LEAD) {
    window.gtag?.("event", "conversion", {
      send_to: `${ADS_ID}/${LABEL_LEAD}`,
      value: 100000,
      currency: "CLP",
    });
  }
};

export const trackWhatsAppClick = () => {
  window.gtag?.("event", "whatsapp_click", {});
  if (ADS_ID && LABEL_WHATSAPP) {
    window.gtag?.("event", "conversion", {
      send_to: `${ADS_ID}/${LABEL_WHATSAPP}`,
    });
  }
};

export const trackPhoneClick = () => {
  window.gtag?.("event", "phone_click", {});
  if (ADS_ID && LABEL_PHONE) {
    window.gtag?.("event", "conversion", {
      send_to: `${ADS_ID}/${LABEL_PHONE}`,
    });
  }
};

export const trackEvent = (
  name: string,
  params: Record<string, unknown> = {},
) => window.gtag?.("event", name, params);

export const trackCtaClick = (location: string, label: string) =>
  trackEvent("cta_click", { cta_location: location, cta_label: label });

export const trackFormStart = (form: string) =>
  trackEvent("form_start", { form_name: form });

export const trackFormAbandon = (form: string, field: string) =>
  trackEvent("form_field_abandon", { form_name: form, field_name: field });
