import { Component, Type } from '@angular/core';
import { CraftingBenchPageType } from './crafting-bench-page.type';
import { ForgePageComponent } from './forge-page/forge-page.component';
import { AugmentPageComponent } from './augment-page/augment-page.component';
import { InfusePageComponent } from './infuse-page/infuse-page.component';
import { EnchantPageComponent } from './enchant-page/enchant-page.component';
import { SealPageComponent } from './seal-page/seal-page.component';

export interface CraftingBenchPageRegistryEntry {
  componentType: Type<Component>;
}

type CraftingBenchPageRegistry = Record<
  CraftingBenchPageType,
  CraftingBenchPageRegistryEntry
>;

export const CRAFTING_BENCH_PAGE_REGISTRY: CraftingBenchPageRegistry = {
  FORGE: { componentType: ForgePageComponent },
  AUGMENT: { componentType: AugmentPageComponent },
  INFUSE: { componentType: InfusePageComponent },
  ENCHANT: { componentType: EnchantPageComponent },
  SEAL: { componentType: SealPageComponent },
};
