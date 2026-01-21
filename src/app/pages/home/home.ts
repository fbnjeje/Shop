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
  isActive = true;
  isDisable = false;



    isDarkMode = signal(true)
  changeMode() {
    if (this.isActive == true) {
      console.log(this.isActive);
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }
}
