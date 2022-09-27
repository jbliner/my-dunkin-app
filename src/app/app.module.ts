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

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
