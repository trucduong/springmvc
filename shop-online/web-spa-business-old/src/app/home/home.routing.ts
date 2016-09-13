import { Routes, RouterModule } from '@angular/router';

import { HomeCmp }    from './index';

const homeRoutes: Routes = [
  { path: 'home',  component: HomeCmp }
];

export const homeRouting = RouterModule.forChild(homeRoutes);