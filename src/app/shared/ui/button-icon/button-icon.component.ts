import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[donutsButtonIcon]',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'button-icon',
  },
})
export class ButtonIconComponent {
  @Input('icon') set setIcon(icon: string) {
    this.iconPath = this.spritePath + '#' + icon;
  }

  iconPath: string = '';
  spritePath: string = '../../../../assets/images/icons.svg';
}
