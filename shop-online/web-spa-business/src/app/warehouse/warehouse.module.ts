import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { SharedModule } from '../shared/index';
import { routing } from './warehouse.routing';

import { WarehouseCmp } from './warehouse';
import { WarehouseDetailCmp } from './detail/detail';
import { WarehouseInputCmp } from './input/input';
import { ReturningFromCustomerCmp } from './returning-from-customer/returning-from-customer';
import { ReturningToSupplierCmp } from './returning-to-supplier/returning-to-supplier';
import { TransferringCmp } from './transferring/transferring';


import {WarehouseService} from './shared/index';

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    WarehouseCmp,
    WarehouseDetailCmp,
    WarehouseInputCmp,
    ReturningFromCustomerCmp, 
    ReturningToSupplierCmp, 
    TransferringCmp
  ],
  providers: [
      WarehouseService
  ]
})
export class WarehouseModule {}
