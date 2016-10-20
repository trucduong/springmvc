import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WarehouseCmp } from './warehouse';
import { WarehouseDetailCmp} from './detail/detail';
import { WarehouseInputCmp } from './input/input';
import { ReturningFromCustomerCmp } from './returning-from-customer/returning-from-customer';
import { ReturningToSupplierCmp } from './returning-to-supplier/returning-to-supplier';
import { TransferringCmp } from './transferring/transferring';





export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'warehouse', component: WarehouseCmp },
  {path: 'warehouse-detail/:id', component: WarehouseDetailCmp },
  {path: 'warehouse-input', component: WarehouseInputCmp },
  {path: 'warehouse-returning-from-customer', component: ReturningFromCustomerCmp },
  {path: 'warehouse-returning-to-supplier', component: ReturningToSupplierCmp },
  {path: 'warehouse-transferring', component: TransferringCmp }
]);
