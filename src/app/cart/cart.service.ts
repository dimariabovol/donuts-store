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

  add(product: IDonut) {
    this.cart.push(product);
    this._cart$$.next(this.cart);
  }
}
