import { Routes } from '@angular/router';
import { FeedHomeComponent } from './feed-home/feed-home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: FeedHomeComponent },
    { path: '',   redirectTo: '/login', pathMatch: 'full' }
];
