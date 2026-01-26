import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductType } from '../interfaces/product.interface';

@Injectable({ providedIn: 'root' })
export class CartService {
  private _cart = new BehaviorSubject<ProductType[]>([]);
  cart$ = this._cart.asObservable();

  add(product: ProductType) {
    const current = this._cart.value;
    this._cart.next([...current, product]);
  }

  remove(id: number) {
    this._cart.next(this._cart.value.filter((p) => p.id !== id));
  }
}
