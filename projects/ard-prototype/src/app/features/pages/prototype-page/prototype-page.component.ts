import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ard-prototype-page',
  standalone: true,
  imports: [],
  templateUrl: './prototype-page.component.html',
  styleUrl: './prototype-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrototypePageComponent {

}
