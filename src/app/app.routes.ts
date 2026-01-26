import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Card } from './shared/components/card/card';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Cart } from './pages/cart/cart';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products/:id', component: ProductDetail },
  { path: 'cart', component: Cart },
];
