import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { SharedModule } from '../shared/index';


import { routing } from './unit.routing';

import { UnitCmp } from './unit';
import { UnitDetailCmp } from './detail/detail';



import {UnitService} from './shared/index';

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    UnitCmp,
    UnitDetailCmp
  ],
  providers: [
      UnitService
  ]
})
export class UnitModule {}
