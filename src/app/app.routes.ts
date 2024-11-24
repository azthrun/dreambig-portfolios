import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: 'articles',
    loadComponent: () => import('./components/articles/articles.component').then(m => m.ArticlesComponent),
}, {
    path: 'contacts',
    loadComponent: () => import('./components/contacts/contacts.component').then(m => m.ContactsComponent),
}, {
    path: 'aboutme',
    loadComponent: () => import('./components/aboutme/aboutme.component').then(m => m.AboutMeComponent),
}, {
    path: 'chatbot',
    loadComponent: () => import('./components/chatbot/chatbot.component').then(m => m.ChatbotComponent),
},{
    path: '**',
    redirectTo: 'contacts',
}];
