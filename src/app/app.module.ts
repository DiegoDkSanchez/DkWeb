import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { LottieAnimationViewModule } from 'ng-lottie';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieAnimationViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
