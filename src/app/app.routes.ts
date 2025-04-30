import { Routes } from '@angular/router';
import { authGuardGuard } from './guards/auth-guard.guard';
import { TestGuardComponent } from './test-guard/test-guard.component';

export const routes: Routes = [
    {
        path: 'about', 
        loadComponent: () => import('./about-page/about-page.component').then(m => m.AboutPageComponent)
    },
    {
        path: 'contact', 
        loadComponent: () => import('./contact-page/contact-page.component').then(m => m.ContactPageComponent)
    },
    {   
        path: 'configX', 
        loadComponent: () => import('./config-xpage/config-xpage.component').then(m => m.ConfigXPageComponent)
    },
    {
        path: 'configY', 
        loadComponent: () => import('./config-ypage/config-ypage.component').then(m => m.ConfigYPageComponent)
    },
    {
        path: 'home', 
        loadComponent: () => import('./header/header.component').then(m => m.HeaderComponent)
    },
    {
        path: 'users', 
        loadComponent: () => import('./users/users.component').then(m => m.UsersComponent)
    },
    {
        path: 'cdkstepper', 
        loadComponent: () => import('./stepper-page/stepper-page.component').then(m => m.StepperPageComponent)
    },
    {
        path: 'materialstepper', 
        loadComponent: () => import('./material-stepper/material-stepper.component').then(m => m.MaterialStepperComponent)
    },
    {
        path: 'guard', 
        loadComponent: () => import('./guard/guard.component').then(m => m.GuardComponent)
    },
    {
        path: 'testGuard',
        component: TestGuardComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full'
    },
];


