import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-biding',
  imports: [FormsModule],
  templateUrl: './biding.html',
  styleUrl: './biding.css',
})
export class Biding {
  name = '12312';


  
  @Input() count = 0;
  @Output() countChange = new EventEmitter<number>();

  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }
}
