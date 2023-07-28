import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IDonut } from 'src/app/interfaces/donut';

@Component({
  selector: 'donuts-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  @Input() product!: IDonut;
}
