import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CartComponent, OrderFormComponent, OrderListComponent],
  imports: [CommonModule, CartRoutingModule, ReactiveFormsModule, SharedModule],
})
export class CartModule {}
