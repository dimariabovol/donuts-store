import { Component, Input } from '@angular/core';
import { IDonut } from 'src/app/interfaces/donut';

@Component({
  selector: 'donuts-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent {
  @Input() products: IDonut[] = [];
}