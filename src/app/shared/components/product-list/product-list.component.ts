import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IDonut } from 'src/app/interfaces/donut';

@Component({
  selector: 'donuts-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  donuts: IDonut[] = [];

  constructor(private _productsService: ProductsService) {}

  ngOnInit(): void {
    this._productsService.getAll$().subscribe(donuts => {
      this.donuts = donuts;
    });
  }
}
