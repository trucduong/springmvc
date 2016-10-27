import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WarehouseCmp } from './warehouse';
import { WarehouseDetailCmp} from './detail/detail';

import { WarehouseInputCmp } from './input/input';
import { WarehouseInputDetailCmp } from './input/detail/detail';

import { WarehouseTransferringCmp } from './transferring/transferring';
import { WarehouseTransferringDetailCmp } from './transferring/detail/detail';

import { WarehouseReturningFromCustomerCmp } from './returning-from-customer/returning-from-customer';
import { WarehouseReturningFromCustomerDetailCmp } from './returning-from-customer/detail/detail';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'warehouse', component: WarehouseCmp },
  {path: 'warehouse-detail/:id', component: WarehouseDetailCmp },
  { path: 'warehouse-input', component: WarehouseInputCmp },
  { path: 'warehouse-input-detail/:id', component: WarehouseInputDetailCmp},
  { path: 'warehouse-transferring', component: WarehouseTransferringCmp },
  { path: 'warehouse-transferring-detail/:id', component: WarehouseTransferringDetailCmp},
  { path: 'warehouse-returning-from-customer', component: WarehouseReturningFromCustomerCmp },
  { path: 'warehouse-returning-from-customer-detail/:id', component: WarehouseReturningFromCustomerDetailCmp}
]);
