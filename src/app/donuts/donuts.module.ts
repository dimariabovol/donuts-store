import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DonutsRoutingModule } from './donuts-routing.module';
import { DonutsComponent } from './donuts.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DonutsComponent, FooterComponent, HeaderComponent],
  imports: [BrowserModule, DonutsRoutingModule, HttpClientModule, SharedModule],
  providers: [],
  bootstrap: [DonutsComponent],
})
export class DonutsModule {}
