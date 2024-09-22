import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-vertical-layout',
  standalone: true,
  imports: [],
  templateUrl: './vertical-layout.component.html',
  styleUrl: './vertical-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerticalLayoutComponent {

}
