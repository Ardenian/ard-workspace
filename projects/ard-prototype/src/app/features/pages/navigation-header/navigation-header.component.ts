import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HorizontalLayoutComponent } from 'ard-library';

@Component({
  selector: 'ard-navigation-header',
  standalone: true,
  imports: [HorizontalLayoutComponent, RouterLink],
  templateUrl: './navigation-header.component.html',
  styleUrl: './navigation-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationHeaderComponent {}
