import { Component, input } from '@angular/core';
import { ProductType } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

  product = input.required<ProductType>()

}
