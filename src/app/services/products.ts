import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ProductType } from '../interfaces/product.interface';

const environments = environment;

@Injectable({ providedIn: 'root' })
export class ProductsService {




  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<ProductType[]>(`${environments.baseUrl}/products`);
  }
}



// number - *+/-


// string - " "


// boolean "true/false"

// Operadores = == != <> <>