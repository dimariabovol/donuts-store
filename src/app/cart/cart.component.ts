import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { IDonut } from '../interfaces/donut';

@Component({
  selector: 'donuts-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart: IDonut[] = [];
  isEmptyCart: boolean = false;

  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    this._cartService.cart$.subscribe((products: IDonut[]) => {
      if (!products.length) {
        this.isEmptyCart = true;
      }
      this.cart = products;
    });
  }
}
