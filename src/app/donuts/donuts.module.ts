import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { CartModule } from '../cart/cart.module';
import { DonutsRoutingModule } from './donuts-routing.module';
import { DonutsComponent } from './donuts.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { LogoComponent } from './components/logo/logo.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';

@NgModule({
  declarations: [
    DonutsComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    CatalogPageComponent,
  ],
  imports: [
    BrowserModule,
    CartModule,
    DonutsRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [DonutsComponent],
})
export class DonutsModule {}
