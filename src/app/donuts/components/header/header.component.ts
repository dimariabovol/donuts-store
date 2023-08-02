import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: '[donuts-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'header',
  },
})
export class HeaderComponent implements OnInit {
  cartItemsCount: number = 0;

  constructor(private _cartService: CartService) {}

  ngOnInit() {
    this._cartService.cart$.subscribe(products => {
      this.cartItemsCount = products.reduce(
        (count, product) => count + product.count,
        0,
      );
    });
  }
}
