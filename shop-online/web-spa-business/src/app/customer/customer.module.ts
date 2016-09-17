import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { SharedModule } from '../shared/index';

import { CustomerGroupCmp } from './group/group';
import { routing } from './customer.routing';
import { CustomerService } from './shared/index';
import { CustomerGroupDetailCmp } from './group/detail/detail';

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    CustomerGroupCmp,
    CustomerGroupDetailCmp
  ],
  providers: [
      CustomerService
  ]
})
export class CustomerModule {}
