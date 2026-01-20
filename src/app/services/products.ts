import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private url = 'https://api.escuelajs.co/api/v1/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any[]>('https://api.escuelajs.co/api/v1/products');
  }
}
