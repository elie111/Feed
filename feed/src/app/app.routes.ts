import { Routes } from '@angular/router';
import { FeedHomeComponent } from './components/feed-home/feed-home.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: FeedHomeComponent },
    { path: '',   redirectTo: '/login', pathMatch: 'full' }
];
