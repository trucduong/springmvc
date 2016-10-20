import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { SharedModule } from '../shared/index';

import { LoginCmp } from './login/login';
import { routing } from './auth.routing';
import { AuthService } from './shared/index';

import { AccountCmp } from './account/account';
import { AccountDetailCmp } from './account/detail/detail';
import { PermissionCmp } from './permission/permission';


@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    LoginCmp,
    AccountCmp,
    AccountDetailCmp,
    PermissionCmp
  ],
  providers: [
      AuthService
  ]
})
export class AuthModule {}
