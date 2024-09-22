import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-horizontal-layout',
  standalone: true,
  imports: [],
  templateUrl: './horizontal-layout.component.html',
  styleUrl: './horizontal-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HorizontalLayoutComponent {

}
