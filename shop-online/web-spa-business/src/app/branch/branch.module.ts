import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { SharedModule } from '../shared/index';

import { routing } from './branch.routing';

import { BranchCmp } from './branch';
import { BranchDetailCmp } from './detail/detail';



import {BranchService} from './shared/index';

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    BranchCmp,
    BranchDetailCmp
  ],
  providers: [
      BranchService
  ]
})
export class BranchModule {}
