import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product-list/product/product.component';
import { FormsModule } from '@angular/forms';
import { ButtonIconComponent } from './ui/button-icon/button-icon.component';
import { ButtonComponent } from './ui/button/button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonIconComponent,
    ProductComponent,
    ProductListComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    ButtonComponent,
    ButtonIconComponent,
    ProductComponent,
    ProductListComponent,
  ],
})
export class SharedModule {}
