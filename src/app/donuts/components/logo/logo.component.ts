import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'donuts-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  @Input() isDark: boolean = false;
}
