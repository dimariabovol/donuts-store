import { Component, Input } from '@angular/core';
import { IDonut } from 'src/app/interfaces/donut';

@Component({
  selector: 'donuts-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent {
  @Input('products') set setProducts(products: IDonut[]) {
    products.map(product => (product.price *= product.count));
    this.products = products;
  }

  products: IDonut[] = [];
  price: number = 0;
}
