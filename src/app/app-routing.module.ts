import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthComponent } from './auth/auth.component';
import { DdperkslayoutComponent } from './layout/ddperkslayout/ddperkslayout.component';
import { DeliverylayoutComponent } from './layout/deliverylayout/deliverylayout.component';
import { DunkincardlayoutComponent } from './layout/dunkincardlayout/dunkincardlayout.component';
import { HomelayoutComponent } from './layout/homelayout/homelayout.component';
import { LocationslayoutComponent } from './layout/locationslayout/locationslayout.component';
import { MenulayoutComponent } from './layout/menulayout/menulayout.component';
import { ShoplayoutComponent } from './layout/shoplayout/shoplayout.component';
import { DdperkscardComponent } from './sitecomponents/ddperkscard/ddperkscard.component';

const routes: Routes = [
  {
  path: 'menuLayoutComponent',
  component: MenulayoutComponent,
  },
  {
    path: 'locationsLayoutComponent',
    component: LocationslayoutComponent,
  },
  {
    path: 'deliveryLayoutComponent',
    component: DeliverylayoutComponent,
  },
  {
    path: 'homeComponent',
    component: HomelayoutComponent,
  },
  {
    path: 'DDPerksLayoutComponent',
    component: DdperkslayoutComponent,
  },
  {
    path: 'dunkinCardLayoutComponent',
    component: DunkincardlayoutComponent,
  },
  {
    path: 'shopLayoutComponent',
    component: ShoplayoutComponent,
  },
  {
    path: '',
    component: HomelayoutComponent,
  },
  {
    path: 'admin',
    component: AddProductComponent,
  },
  {
    path: 'auth',
    component: AuthComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
