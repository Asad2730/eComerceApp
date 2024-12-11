import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',

})
export class HomeComponent {
  products = [
    { name: 'Product 1', description: 'Description for product 1', price: 50 },
    { name: 'Product 2', description: 'Description for product 2', price: 75 },
    { name: 'Product 3', description: 'Description for product 3', price: 100 },
  ];
}
