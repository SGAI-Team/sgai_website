const STORAGE_KEY = "sgai_utm";
const TTL_MS = 30 * 24 * 60 * 60 * 1000;

export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const;

export type UtmKey = (typeof UTM_KEYS)[number];
export type UtmParams = Partial<Record<UtmKey, string>>;

type StoredUtm = { ts: number; params: UtmParams };

const readStorage = (): StoredUtm | null => {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredUtm;
    if (!parsed.ts || Date.now() - parsed.ts > TTL_MS) {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
};

const writeStorage = (params: UtmParams) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ts: Date.now(), params }),
    );
  } catch {
    /* ignore */
  }
};

export const captureUtmParams = (): UtmParams => {
  if (typeof window === "undefined") return {};
  const search = new URLSearchParams(window.location.search);
  const fresh: UtmParams = {};
  for (const key of UTM_KEYS) {
    const v = search.get(key);
    if (v) fresh[key] = v;
  }
  if (Object.keys(fresh).length > 0) {
    const existing = readStorage();
    const merged = { ...(existing?.params ?? {}), ...fresh };
    writeStorage(merged);
    return merged;
  }
  return readStorage()?.params ?? {};
};

export const getUtmParams = (): UtmParams => {
  return readStorage()?.params ?? {};
};
