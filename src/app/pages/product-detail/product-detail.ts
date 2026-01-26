import { map } from 'rxjs';
import { ProductsService } from './../../services/products';
import { Component, inject, input, output } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cartservice';
import { ProductType } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.html',
  imports: [CommonModule, RouterLink],
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  private route = inject(ActivatedRoute);
  private productsService = inject(ProductsService);
  private cartService = inject(CartService);

  product$ = this.productsService
    .getProducts()
    .pipe(
      map((products) =>
        products.find((p) => p.id === Number(this.route.snapshot.paramMap.get('id'))),
      ),
    );
  addToCart(product: ProductType) {
    this.cartService.add(product);
    console.log(product);
  }
}
