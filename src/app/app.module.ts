import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavbarComponent } from './navigation/topnavbar/topnavbar.component';
import { SecondnavbarComponent } from './navigation/secondnavbar/secondnavbar.component';
import { ThirdnavbarComponent } from './navigation/thirdnavbar/thirdnavbar.component';
import { DdperkscardComponent } from './sitecomponents/ddperkscard/ddperkscard.component';
import { SignupwindowComponent } from './sitecomponents/signupwindow/signupwindow.component';
import { CardslabexampleComponent } from './cardslabexample/cardslabexample.component';
import { CaliforniarewardsComponent } from './sitecomponents/californiarewards/californiarewards/californiarewards.component';
import { MenulayoutComponent } from './layout/menulayout/menulayout.component';
import { HomelayoutComponent } from './layout/homelayout/homelayout.component';
import { LocationslayoutComponent } from './layout/locationslayout/locationslayout.component';
import { DeliverylayoutComponent } from './layout/deliverylayout/deliverylayout.component';
import { DdperkslayoutComponent } from './layout/ddperkslayout/ddperkslayout.component';
import { DunkincardlayoutComponent } from './layout/dunkincardlayout/dunkincardlayout.component';
import { ShoplayoutComponent } from './layout/shoplayout/shoplayout.component';
import { MenulayoutaddonsComponent } from './layout/menulayout/menulayoutaddons/menulayoutaddons/menulayoutaddons.component';




@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent,
    SecondnavbarComponent,
    ThirdnavbarComponent,
    DdperkscardComponent,
    SignupwindowComponent,
    CardslabexampleComponent,
    CaliforniarewardsComponent,
    MenulayoutComponent,
    HomelayoutComponent,
    LocationslayoutComponent,
    DeliverylayoutComponent,
    DdperkslayoutComponent,
    DunkincardlayoutComponent,
    ShoplayoutComponent,
    MenulayoutaddonsComponent,

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
