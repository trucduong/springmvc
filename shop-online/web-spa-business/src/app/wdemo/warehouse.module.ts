import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { SharedModule } from '../shared/index';

import {WarehouseService} from './shared/index';
import { routing } from './warehouse.routing';

import { WarehouseCmp } from './warehouse';
import { WarehouseDetailCmp } from './detail/detail';

import { WarehouseInputCmp } from './input/input';
import { WarehouseInputDetailCmp } from './input/detail/detail';

import { WarehouseTransferringCmp } from './transferring/transferring';
import { WarehouseTransferringDetailCmp } from './transferring/detail/detail';

import { WarehouseReturningFromCustomerCmp } from './returning-from-customer/returning-from-customer';
import { WarehouseReturningFromCustomerDetailCmp } from './returning-from-customer/detail/detail';


@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    WarehouseCmp,
    WarehouseDetailCmp,
    WarehouseInputCmp,
    WarehouseInputDetailCmp,
    WarehouseTransferringCmp,
    WarehouseTransferringDetailCmp,
    WarehouseReturningFromCustomerCmp,
    WarehouseReturningFromCustomerDetailCmp


  ],
  providers: [
      WarehouseService
  ]
})
export class WarehouseModule {}
