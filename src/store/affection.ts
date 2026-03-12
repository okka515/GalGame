// 好感度パラメータの管理（localStorage に永続化）

export type CharacterId = "aoi" | "hana" | "sora" | "kotone" | "riko" | "yuki";

// 卒業できる好感度の閾値
export const GRADUATION_THRESHOLD = 80;

type AffectionStore = Record<CharacterId, number>;

const STORAGE_KEY = "galgame_affection";

const defaultAffection: AffectionStore = {
  aoi: 0,
  hana: 0,
  sora: 0,
  kotone: 0,
  riko: 0,
  yuki: 0,
};

export function loadAffection(): AffectionStore {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultAffection };
    return JSON.parse(raw) as AffectionStore;
  } catch {
    return { ...defaultAffection };
  }
}

export function saveAffection(store: AffectionStore): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

export function addAffection(id: CharacterId, amount: number): void {
  const store = loadAffection();
  store[id] = Math.min(100, Math.max(0, store[id] + amount));
  saveAffection(store);
}

export function canGraduate(id: CharacterId): boolean {
  const store = loadAffection();
  return store[id] >= GRADUATION_THRESHOLD;
}

export function resetAffection(): void {
  localStorage.removeItem(STORAGE_KEY);
}
