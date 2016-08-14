import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { homeRouting, HomeCmp } from './index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    homeRouting
  ],
  declarations: [
    HomeCmp
  ]
})
export class HomeModule {}