import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IDonut } from '../interfaces/donut';
import { ICartDonut } from './interfaces/cart-product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: ICartDonut[] = [];

  get cart$(): Observable<ICartDonut[]> {
    return this._cart$$.asObservable();
  }

  private _cart$$: BehaviorSubject<ICartDonut[]> = new BehaviorSubject<
    ICartDonut[]
  >([]);

  add(product: IDonut, count: number) {
    const availableProduct = this.cart.find(
      cartProduct => cartProduct.id === product.id,
    );

    if (availableProduct) {
      availableProduct.count = count;
      return;
    }

    this.cart.push({ ...product, count });
    this._cart$$.next(this.cart);
  }
}
