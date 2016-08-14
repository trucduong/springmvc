import { Routes, RouterModule } from '@angular/router';

import { 
    CustomerCmp,
    CustomerGroupCmp,
    CustomerGroupDetailCmp
 } from './index';

const customerRoutes: Routes = [
  { path: 'customer',  component: CustomerCmp },
  { path: 'customer/group',  component: CustomerGroupCmp },
  { path: 'customer/group/detail/:id',  component: CustomerGroupDetailCmp },
];

export const customerRouting = RouterModule.forChild(customerRoutes);