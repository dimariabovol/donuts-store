import { Component } from '@angular/core';

@Component({
  selector: 'donuts-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly NUMBER_OF_PRODUCTS_TO_SHOW: number = 8;
}
