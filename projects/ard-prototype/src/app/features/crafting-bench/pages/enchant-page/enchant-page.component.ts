import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CraftingBenchPageType } from '../crafting-bench-page.type';

@Component({
  selector: 'ard-enchant-page',
  standalone: true,
  imports: [],
  templateUrl: './enchant-page.component.html',
  styleUrl: './enchant-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnchantPageComponent {}
