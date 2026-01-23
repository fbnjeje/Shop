import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../services/products';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { Card } from '../shared/components/card/card';
import { ProductDetail } from '../pages/product-detail/product-detail';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, Card],
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
})
export class ProductsComponent {
  products$;
  selectedCategory$ = new BehaviorSubject<string>('all');

  categories$;
  filteredProducts$;

  constructor(private productsService: ProductsService) {
    this.products$ = this.productsService.getProducts();

    this.categories$ = this.products$.pipe(
      map((products) => ['all', ...new Set(products.map((p) => p.category))]),
    );

    this.filteredProducts$ = combineLatest([this.products$, this.selectedCategory$]).pipe(
      map(([products, caterory]) =>
        caterory === 'all' ? products : products.filter((p) => p.category === caterory),
      ),
    );
  }

  selectCategory(category: string) {
    this.selectedCategory$.next(category);
  }
}
