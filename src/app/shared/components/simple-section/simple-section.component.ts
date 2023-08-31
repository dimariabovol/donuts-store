import { Component, Input } from '@angular/core';

@Component({
  selector: 'donuts-simple-section',
  templateUrl: './simple-section.component.html',
  styleUrls: ['./simple-section.component.scss'],
  host: {
    class: 'component-wrapper',
  },
})
export class SimpleSectionComponent {
  @Input() title: string = '';
}
