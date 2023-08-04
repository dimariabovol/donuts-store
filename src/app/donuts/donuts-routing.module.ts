import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';

const routes: Routes = [
  {
    path: 'cart',
    loadChildren: () => import('../cart/cart.module').then(m => m.CartModule),
  },
  {
    path: 'catalog',
    component: CatalogPageComponent,
  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DonutsRoutingModule {}
