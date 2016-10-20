import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginCmp } from './login/login';
import { AccountCmp } from './account/account';
import { PermissionCmp } from './permission/permission';
import { AccountDetailCmp } from './account/detail/detail';



export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'login', component: LoginCmp },
  { path: 'account', component: AccountCmp },
  { path: 'account-grant/:id', component: PermissionCmp },
  { path: 'account-detail/:id', component: AccountDetailCmp },

]);
