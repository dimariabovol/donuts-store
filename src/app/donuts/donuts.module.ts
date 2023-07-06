import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DonutsRoutingModule } from './donuts-routing.module';
import { DonutsComponent } from './donuts.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [DonutsComponent, HeaderComponent],
  imports: [BrowserModule, DonutsRoutingModule],
  providers: [],
  bootstrap: [DonutsComponent],
})
export class DonutsModule {}
