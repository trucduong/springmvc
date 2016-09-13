import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {WrapperCmp, PaginationCmp, FilterCmp} from '../shared/components/index';

@Component({
  selector: 'customer',
  templateUrl: 'customer.html',
  styleUrls: ['customer.css'],
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, WrapperCmp, PaginationCmp, FilterCmp]
})

export class CustomerCmp {
}
