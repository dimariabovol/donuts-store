import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product-list/product/product.component';
import { FormsModule } from '@angular/forms';
import { ButtonIconComponent } from './ui/button-icon/button-icon.component';
import { ButtonComponent } from './ui/button/button.component';
import { RouterModule } from '@angular/router';
import { CounterComponent } from './ui/counter/counter.component';
import { InputComponent } from './ui/input/input.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonIconComponent,
    ProductComponent,
    ProductListComponent,
    CounterComponent,
    InputComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    ButtonComponent,
    ButtonIconComponent,
    ProductComponent,
    ProductListComponent,
    CounterComponent,
    InputComponent,
  ],
})
export class SharedModule {}
