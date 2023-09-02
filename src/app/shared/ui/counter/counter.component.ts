import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { IDonut } from 'src/app/interfaces/donut';

@Component({
  selector: 'donuts-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'counter',
  },
})
export class CounterComponent {
  @Input() product!: IDonut;
  @Input() @HostBinding('class.counter--small') isSmall: boolean = false;

  decreaseCount() {
    if (this.product.count > 1) {
      this.product.count--;
    }
  }

  increaseCount() {
    this.product.count++;
  }
}
