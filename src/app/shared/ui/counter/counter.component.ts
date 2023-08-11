import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

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
  @HostBinding('class.counter--small') @Input() isSmall: boolean = false;

  count: number = 1;

  decreaseCount() {
    if (this.count <= 1) return;

    this.count--;
  }

  increaseCount() {
    this.count++;
  }
}
