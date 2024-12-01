import {
  ChangeDetectionStrategy,
  Component,
  input,
  Input,
  output,
} from '@angular/core';
import {
  HorizontalLayoutComponent,
  VerticalLayoutComponent,
} from 'ard-library';
import { CraftingBenchPageType } from '../pages/crafting-bench-page.type';
import {
  CRAFTING_BENCH_NAVIGATION_PAGE_LIST,
  CraftingBenchNavigationPageListEntry,
} from './crafting-bench-navigation-entries';

@Component({
  selector: 'ard-crafting-bench-navigation',
  standalone: true,
  imports: [VerticalLayoutComponent],
  templateUrl: './crafting-bench-navigation.component.html',
  styleUrl: './crafting-bench-navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CraftingBenchNavigationComponent {
  protected pages: CraftingBenchNavigationPageListEntry[] = [
    ...CRAFTING_BENCH_NAVIGATION_PAGE_LIST,
  ];

  activePage = input<CraftingBenchPageType>('FORGE');

  pageChanged = output<CraftingBenchPageType>();

  protected onPageChange(page: CraftingBenchPageType) {
    this.pageChanged.emit(page);
  }
}
