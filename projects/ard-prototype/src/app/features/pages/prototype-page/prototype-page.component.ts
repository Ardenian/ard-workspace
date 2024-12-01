import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'ard-prototype-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './prototype-page.component.html',
  styleUrl: './prototype-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrototypePageComponent {}
