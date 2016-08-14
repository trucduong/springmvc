import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { BlankCmp, blankRouting } from './index';
import { BlankService } from './shared/index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    blankRouting
  ],
  declarations: [
    BlankCmp
  ],
  providers: [
      BlankService
  ]
})
export class BlankModule {}