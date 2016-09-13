import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { BlankComponent, blankRouting } from './index';
import { BlankService } from './shared/index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BlankComponent
  ],
  providers: [
      BlankService
  ]
})
export class BlankModule {}