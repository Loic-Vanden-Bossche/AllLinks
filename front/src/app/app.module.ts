import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallbackComponent } from "./auth/callback.component";
import { HttpClientModule } from "@angular/common/http";
import { AuthModule } from "./auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HttpClientModule,
    AppRoutingModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
