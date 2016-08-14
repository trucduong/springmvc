import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { authRouting, AuthCmp } from './index';
import { AuthGuard, AuthService } from './shared/index';

export const authProviders = [
  AuthGuard,
  AuthService
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    authRouting
  ],
  declarations: [
    AuthCmp
  ],
  providers: authProviders
})
export class AuthModule {}