import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/blank', pathMatch: 'full' },
  { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: 'blank', loadChildren: 'app/blank/blank.module#BlankModule' },
  { path: 'customer', loadChildren: 'app/customer/customer.module#CustomerModule' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
