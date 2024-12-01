export const CRAFTING_BENCH_PAGE_TYPES = [
  'FORGE',
  'AUGMENT',
  'INFUSE',
  'ENCHANT',
  'SEAL',
] as const;

export type CraftingBenchPageType = (typeof CRAFTING_BENCH_PAGE_TYPES)[number];
