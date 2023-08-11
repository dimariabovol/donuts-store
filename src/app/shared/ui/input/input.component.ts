import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'donuts-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'input',
  },
})
export class InputComponent {
  @Input() isLabelHidden: boolean = false;
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() type: string = '';
}
