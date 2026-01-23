import { Component, inject, input, output, OutputEmitterRef, signal } from '@angular/core';
import { ProductType } from '../../../interfaces/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  maxTitleLength = 23;

  get shortTitle(): string {
    const title = this.product().title;
    return title.length > this.maxTitleLength ? title.slice(0, this.maxTitleLength) + '…' : title;
  }
  private router = inject(Router);
  product = input.required<ProductType>();

  emmitIdProduct: OutputEmitterRef<number> = output<number>();

  itemProduct = signal<number>(0);

  emitId() {
    this.itemProduct.update((v) => this.product().id);

    this.emmitIdProduct.emit(this.product().id);
    
    console.log(this.itemProduct());
    this.router.navigate(['products', this.itemProduct()]);
  }
}
