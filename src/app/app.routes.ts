import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent() { return import('./routes/chat-route/chat-route.component').then(m => m.ChatRouteComponent); }},
    {path: 'form', loadComponent() { return import('./routes/form-route/form-route.component').then(m => m.FormRouteComponent); }},
    {path: '**', redirectTo: ''}
];
