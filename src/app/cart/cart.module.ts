import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { OrderListComponent } from './components/order-list/order-list.component';

@NgModule({
  declarations: [CartComponent, OrderListComponent],
  imports: [CommonModule, CartRoutingModule, SharedModule],
})
export class CartModule {}
