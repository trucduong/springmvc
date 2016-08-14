import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { 
    customerRouting,
    CustomerCmp,
    CustomerGroupCmp,
    CustomerGroupDetailCmp,
    } from './index';
import { CustomerService } from './shared/index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    customerRouting
  ],
  declarations: [
    CustomerCmp,
    CustomerGroupCmp,
    CustomerGroupDetailCmp,
  ],
  providers: [
      CustomerService
  ]
})
export class CustomerModule {}