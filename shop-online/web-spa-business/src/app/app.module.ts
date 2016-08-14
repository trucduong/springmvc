import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppCmp }       from './app';
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
    FormsModule,
    routing,
    AuthModule,
    HomeModule,
    BlankModule,
    CustomerModule
  ],
  declarations: [
    AppCmp
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppCmp ]
})
export class AppModule {
}