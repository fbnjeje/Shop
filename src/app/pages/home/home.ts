import { Component, signal } from '@angular/core';
import { ProductsComponent } from '../../products/products';
import { Header } from '../../shared/components/header/header';
import { CommonModule } from '@angular/common';
import { ProductDetail } from '../product-detail/product-detail';

@Component({
  selector: 'app-home',
  imports: [ProductsComponent, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  isDarkMode = signal(false);
}
