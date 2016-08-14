import { Routes, RouterModule } from '@angular/router';

import { AuthCmp }    from './index';

const authRoutes: Routes = [
  { path: 'login',  component: AuthCmp }
];

export const authRouting = RouterModule.forChild(authRoutes);