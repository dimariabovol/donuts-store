import { Component, Input } from '@angular/core';
import { ICartDonut } from '../../interfaces/cart-product.interface';
import { IDonut } from 'src/app/interfaces/donut';

@Component({
  selector: 'donuts-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent {
  @Input('products') set setProducts(products: ICartDonut[]) {
    products.map(product => (product.price *= product.count));
    this.products = products;
  }

  products: ICartDonut[] = [];
  price: number = 0;
}
