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
import { ThirdmenuComponent } from './thirdmenu/thirdmenu.component';
import {HttpClientModule} from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule} from '@angular/fire/compat';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';




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
    ThirdmenuComponent,
    AddProductComponent,
    AuthComponent

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
