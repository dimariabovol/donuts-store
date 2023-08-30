import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IDonut } from 'src/app/interfaces/donut';

@Component({
  selector: 'donuts-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() numberOfProductsToShow: number = 0;

  products: IDonut[] = [];
  isEmptyList: boolean = false;

  constructor(private _productsService: ProductsService) {}

  ngOnInit() {
    this._productsService.getAll$().subscribe((products: IDonut[]) => {
      if (!products.length) {
        this.isEmptyList = true;
        return;
      }

      this.products = this.numberOfProductsToShow
        ? products.splice(0, this.numberOfProductsToShow)
        : products;
    });
  }
}
