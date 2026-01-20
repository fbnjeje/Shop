import { Component, input } from '@angular/core';
import { ProductType } from '../../../interfaces/product.interface';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
maxTitleLength = 25;

get shortTitle(): string {
  const title = this.product().title;
  return title.length > this.maxTitleLength
    ? title.slice(0, this.maxTitleLength) + '…'
    : title;
}

  product = input.required<ProductType>()

}
