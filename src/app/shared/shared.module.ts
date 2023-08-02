import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product-list/product/product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [CommonModule, FormsModule],
  exports: [ProductComponent, ProductListComponent],
})
export class SharedModule {}
