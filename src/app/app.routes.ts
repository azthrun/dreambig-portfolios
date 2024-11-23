import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'articles',
        loadComponent: () => import('./components/articles/articles.component').then(m => m.ArticlesComponent),
    }
];
