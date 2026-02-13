import { Routes } from '@angular/router';
import { Login } from '../component/login/login';
import { Register } from '../component/register/register';
import { Home } from '../component/home/home';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'home', component: Home }
];
