import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BranchCmp } from './branch';
import { BranchDetailCmp} from './detail/detail';


export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'branch', component: BranchCmp },
  {path: 'branch-detail/:id', component: BranchDetailCmp }
]);
