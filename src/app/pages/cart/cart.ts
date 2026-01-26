import { CartService } from './../../services/cartservice';
import { CommonModule } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  private cartService = inject(CartService);

  cart$ = this.cartService.cart$;

  constructor(private CartService: CartService) {}
  
  remove(id: number) {
    this.cartService.remove(id);
  }
}
