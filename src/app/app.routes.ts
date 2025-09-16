import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'recipe-detail/:id',
    loadComponent: () => import('./pages/recipe-detail/recipe-detail.page').then( m => m.RecipeDetailPage)
  },
];

