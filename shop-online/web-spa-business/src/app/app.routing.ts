import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/blank', pathMatch: 'full' },
  { path: 'blank', loadChildren: 'app/blank/blank.module#BlankModule' },
  { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
