import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { IDonut } from 'src/app/interfaces/donut';

@Component({
  selector: 'donuts-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  @Input() product!: IDonut;

  constructor(private _cartService: CartService) {}

  addToCart(product: IDonut) {
    this._cartService.add(product);
  }
}
