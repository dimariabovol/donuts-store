import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IDonut } from '../interfaces/donut';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: IDonut[] = [];

  get cart$(): Observable<IDonut[]> {
    return this._cart$$.asObservable();
  }

  private _cart$$: BehaviorSubject<IDonut[]> = new BehaviorSubject<IDonut[]>(
    [],
  );

  add(product: IDonut, count: number) {
    const availableProduct = this.cart.find(
      cartProduct => cartProduct.id === product.id,
    );

    if (!availableProduct) {
      this.cart.push({ ...product, count });
    }

    if (availableProduct) {
      availableProduct.count = count;
    }

    this._cart$$.next(this.cart);
  }
}
