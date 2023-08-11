import { ViewportScroller } from '@angular/common';
import {
  Component,
  HostBinding,
  HostListener,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
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
  @HostBinding('class.header--shadowed') isShadowed: boolean = false;

  @HostListener('window:scroll') onScroll() {
    this.isShadowed = window.scrollY > 0;
  }

  cartItemsCount: number = 0;

  constructor(
    private _cartService: CartService,
    private _viewportScroller: ViewportScroller,
  ) {}

  ngOnInit() {
    this._cartService.cart$.subscribe(products => {
      this.cartItemsCount = products.reduce(
        (count, product) => count + product.count,
        0,
      );
    });
  }
}
