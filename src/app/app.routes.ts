import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Card } from './shared/components/card/card';
import { ProductDetail } from './pages/product-detail/product-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'product/:id', component: ProductDetail },
];
