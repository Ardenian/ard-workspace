import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationHeaderComponent } from './features/pages/navigation-header/navigation-header.component';

@Component({
  selector: 'ard-root',
  standalone: true,
  imports: [RouterOutlet, NavigationHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
