import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { CartService } from 'src/app/cart/cart.service';
import { IDonut } from 'src/app/interfaces/donut';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'donuts-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  product!: IDonut;

  constructor(
    private _cartService: CartService,
    private _productsServise: ProductsService,
    private _route: ActivatedRoute,
  ) {}

  addToCart(product: IDonut) {
    this._cartService.add(product);
  }

  ngOnInit() {
    this._route.params
      .pipe(
        switchMap((params: Params) =>
          this._productsServise.getById$(params['id']),
        ),
      )
      .subscribe((product: IDonut) => (this.product = product));
  }
}
