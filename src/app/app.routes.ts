import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Card } from './shared/components/card/card';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'card', component: Card },
];
