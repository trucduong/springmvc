import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }       from './app.component';
import { routing,
         appRoutingProviders } from './app.routing';

import { CustomerModule } from './customer/index';
import { AuthModule } from './auth/index';
import { HomeModule } from './home/index';
import { BlankModule } from './blank/index';

//import { DialogService }  from './dialog.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing,
    //AuthModule,
    //HomeModule,
    BlankModule
    //CustomerModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    appRoutingProviders
  ],
  entryComponents: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}