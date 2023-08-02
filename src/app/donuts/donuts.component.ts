import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'donuts-root',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'page',
  },
})
export class DonutsComponent {}
