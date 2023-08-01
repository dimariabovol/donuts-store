import { Component, Input } from '@angular/core';

@Component({
  selector: 'donuts-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  @Input() isDark: boolean = false;
}
