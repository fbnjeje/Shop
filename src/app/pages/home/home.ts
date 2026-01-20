import { Component } from '@angular/core';
import { ProductsComponent } from '../../products/products';
import { Header } from '../../shared/components/header/header';
import { timer } from 'rxjs';
import { Biding } from '../../biding/biding';

@Component({
  selector: 'app-home',
  imports: [ProductsComponent, Header, Biding],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  myCounter = 0;
}
