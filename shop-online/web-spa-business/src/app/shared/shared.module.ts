import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderModule } from './header/index';
import { FilterCmp }  from './filter/filter';
import { PaginationCmp }  from './pagination/pagination';
import { WrapperCmp }  from './wrapper/wrapper';

@NgModule({
  imports:      [ 
    CommonModule,
    HeaderModule
  ],
  declarations: [
    FilterCmp,
    PaginationCmp,
    WrapperCmp
  ],
  exports: [ 
    CommonModule,
    FormsModule,
    HeaderModule,
    FilterCmp,
    PaginationCmp,
    WrapperCmp
  ],
})
export class SharedModule { }