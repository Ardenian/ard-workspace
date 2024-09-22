import { Routes } from '@angular/router';
import { DocumentationPageComponent } from './features/pages/documentation-page/documentation-page.component';
import { PrototypePageComponent } from './features/pages/prototype-page/prototype-page.component';

export const routes: Routes = [
  { path: 'documentation', component: DocumentationPageComponent },
  { path: 'prototype', component: PrototypePageComponent },
];
