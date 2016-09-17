import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CustomerGroupCmp } from './group/group';
import { CustomerGroupDetailCmp } from './group/detail/detail';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'customer-group', component: CustomerGroupCmp },
  { path: 'customer-group-detail/:id', component: CustomerGroupDetailCmp}
]);
