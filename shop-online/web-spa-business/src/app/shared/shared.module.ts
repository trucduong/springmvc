import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderModule } from './header/index';
import { FilterCmp }  from './filter/filter';
import { PaginationCmp }  from './pagination/pagination';
import { WrapperCmp }  from './wrapper/wrapper';
import { AlertCmp } from './alert/alert';
import { LoadingCmp } from './loading/loading';
import { GridCmp } from './grid/grid';
import { GridActionCmp } from './grid/action/action';
import { GridContentCmp } from './grid/content/content';

@NgModule({
  imports:      [ 
    CommonModule,
    FormsModule,
    HeaderModule
  ],
  declarations: [
    FilterCmp,
    PaginationCmp,
    WrapperCmp,
    AlertCmp,
    LoadingCmp,
    GridCmp,
    GridActionCmp,
    GridContentCmp
  ],
  exports: [ 
    CommonModule,
    FormsModule,
    HeaderModule,
    FilterCmp,
    PaginationCmp,
    WrapperCmp,
    AlertCmp,
    LoadingCmp,
    GridCmp,
    GridActionCmp,
    GridContentCmp
  ],
})
export class SharedModule { }