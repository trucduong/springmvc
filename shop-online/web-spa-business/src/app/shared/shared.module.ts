import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderModule } from './header/index';
import { FilterCmp }  from './filter/filter';
import { PaginationCmp }  from './pagination/pagination';
import { WrapperCmp }  from './wrapper/wrapper';
import { AlertCmp } from './alert/alert';

@NgModule({
  imports:      [ 
    CommonModule,
    HeaderModule
  ],
  declarations: [
    FilterCmp,
    PaginationCmp,
    WrapperCmp,
    AlertCmp
  ],
  exports: [ 
    CommonModule,
    FormsModule,
    HeaderModule,
    FilterCmp,
    PaginationCmp,
    WrapperCmp,
    AlertCmp
  ],
})
export class SharedModule { }