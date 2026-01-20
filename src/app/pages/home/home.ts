import { Component } from '@angular/core';
import { ProductsComponent } from '../../products/products';
import { Header } from "../../shared/components/header/header";

@Component({
  selector: 'app-home',
  imports: [ProductsComponent, Header],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
