import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component'
import { DetailProductComponent } from './components/detail-product/detail-product.component'
import { CartsComponent } from './components/carts/carts.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: DetailProductComponent },
  { path: 'carts/:id', component: CartsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
