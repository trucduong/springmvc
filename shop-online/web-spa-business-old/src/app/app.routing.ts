import { Routes, RouterModule }   from '@angular/router';

import { authProviders }  from './auth/index';

import { CanDeactivateGuard } from './auth/shared/index';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

export const appRoutingProviders: any[] = [
  authProviders,
  CanDeactivateGuard
];

export const routing = RouterModule.forRoot(appRoutes);
