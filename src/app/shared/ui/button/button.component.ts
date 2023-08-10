import {
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: '[donuts-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'button',
  },
})
export class ButtonComponent {
  @HostBinding('class.button--large') @Input() isLarge: boolean = false;
}
