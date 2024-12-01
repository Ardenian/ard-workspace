import { CraftingBenchPageType } from '../pages/crafting-bench-page.type';

export interface CraftingBenchNavigationPageListEntry {
  type: CraftingBenchPageType;
  displayName: string;
}

type CraftingBenchNavigationPageEntryRegistry = Record<
  CraftingBenchPageType,
  CraftingBenchNavigationPageListEntry
>;

const REGISTRY: CraftingBenchNavigationPageEntryRegistry = {
  FORGE: { type: 'FORGE', displayName: 'Forge' },
  AUGMENT: { type: 'AUGMENT', displayName: 'Augment' },
  INFUSE: { type: 'INFUSE', displayName: 'Infuse' },
  ENCHANT: { type: 'ENCHANT', displayName: 'Enchant' },
  SEAL: { type: 'SEAL', displayName: 'Seal' },
};

export const CRAFTING_BENCH_NAVIGATION_PAGE_LIST = [
  REGISTRY.FORGE,
  REGISTRY.AUGMENT,
  REGISTRY.INFUSE,
  REGISTRY.ENCHANT,
  REGISTRY.SEAL,
] as const;
