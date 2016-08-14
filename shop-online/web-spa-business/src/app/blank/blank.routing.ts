import { Routes, RouterModule } from '@angular/router';

import { BlankCmp }    from './index';

const blankRoutes: Routes = [
  { path: 'blank',  component: BlankCmp }
];

export const blankRouting = RouterModule.forChild(blankRoutes);