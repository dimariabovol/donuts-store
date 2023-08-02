import { Component, Input } from '@angular/core';
import { ICartDonut } from '../../interfaces/cart-product.interface';

@Component({
  selector: 'donuts-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent {
  @Input() products: ICartDonut[] = [];
}
