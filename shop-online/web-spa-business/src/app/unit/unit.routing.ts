import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UnitCmp } from './unit';
import { UnitDetailCmp} from './detail/detail';


export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'unit', component: UnitCmp },
  {path: 'unit-detail/:id', component: UnitDetailCmp }
]);
