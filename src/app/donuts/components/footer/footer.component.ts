import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[donuts-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'footer',
  },
})
export class FooterComponent {}
