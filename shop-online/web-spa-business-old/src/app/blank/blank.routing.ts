import { Routes, RouterModule } from '@angular/router';

import { BlankComponent }    from './index';

const blankRoutes: Routes = [
  { path: 'blank',  component: BlankComponent }
];

export const blankRouting = RouterModule.forChild(blankRoutes);