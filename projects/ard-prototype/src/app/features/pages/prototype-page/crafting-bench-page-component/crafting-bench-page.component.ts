import { ChangeDetectionStrategy, Component, Type } from '@angular/core';
import { HorizontalLayoutComponent } from 'ard-library';
import { CraftingBenchNavigationComponent } from '../../../crafting-bench/crafting-bench-navigation/crafting-bench-navigation.component';
import { CRAFTING_BENCH_PAGE_REGISTRY } from '../../../crafting-bench/pages/crafting-bench-page-registry';
import { NgComponentOutlet } from '@angular/common';
import { CraftingBenchPageType } from '../../../crafting-bench/pages/crafting-bench-page.type';

@Component({
  selector: 'ard-crafting-bench-page',
  standalone: true,
  imports: [
    HorizontalLayoutComponent,
    CraftingBenchNavigationComponent,
    NgComponentOutlet,
  ],
  templateUrl: './crafting-bench-page.component.html',
  styleUrl: './crafting-bench-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CraftingBenchPageComponent {
  protected activePageType: Type<Component> =
    CRAFTING_BENCH_PAGE_REGISTRY['FORGE'].componentType;

  protected onPageChanged($event: CraftingBenchPageType) {
    this.activePageType = CRAFTING_BENCH_PAGE_REGISTRY[$event].componentType;
  }
}
