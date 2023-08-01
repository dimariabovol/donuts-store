import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { Observable } from 'rxjs';
import { IDonut } from '../interfaces/donut';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart: Observable<IDonut[]> = this._cartService.cart$;

  constructor(private _cartService: CartService) {}
}
