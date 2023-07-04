import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DonutsRoutingModule } from './donuts-routing.module';
import { DonutsComponent } from './donuts.component';

@NgModule({
  declarations: [DonutsComponent],
  imports: [BrowserModule, DonutsRoutingModule],
  providers: [],
  bootstrap: [DonutsComponent],
})
export class DonutsModule {}
