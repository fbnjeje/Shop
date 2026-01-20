import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../services/products';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
})
export class ProductsComponent {
  products$!: Observable<any[]>;

  constructor(private productsService: ProductsService) {
    this.products$ = this.productsService.getProducts();
  }
}
