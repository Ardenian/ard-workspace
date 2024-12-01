import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ard-forge-page',
  standalone: true,
  imports: [],
  templateUrl: './forge-page.component.html',
  styleUrl: './forge-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgePageComponent {}
