import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
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
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();

  count: number = 1;

  decreaseCount() {
    if (this.count <= 1) return;

    this.count--;
    this.countChange.emit(this.count);
  }

  increaseCount() {
    this.count++;
    this.countChange.emit(this.count);
  }
}
