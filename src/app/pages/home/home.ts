import { Component, signal } from '@angular/core';
import { ProductsComponent } from '../../products/products';
import { Header } from '../../shared/components/header/header';
import { CommonModule } from '@angular/common';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  imports: [ProductsComponent, Header, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  isDarkMode = signal(false);
}
