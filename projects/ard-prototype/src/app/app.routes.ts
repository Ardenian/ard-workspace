import { Routes } from '@angular/router';
import { DocumentationPageComponent } from './features/pages/documentation-page/documentation-page.component';
import { PrototypePageComponent } from './features/pages/prototype-page/prototype-page.component';
import { CraftingBenchPageComponent } from './features/pages/prototype-page/crafting-bench-page-component/crafting-bench-page.component';

export const routes: Routes = [
  { path: 'documentation', component: DocumentationPageComponent },
  {
    path: 'prototype',
    component: PrototypePageComponent,
    children: [
      { path: 'crafting-bench', component: CraftingBenchPageComponent },
    ],
  },
];
