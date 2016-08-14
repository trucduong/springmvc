import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {WrapperCmp} from '../shared/wrapper/wrapper';
import {PaginationCmp} from '../shared/pagination/pagination';
import {FilterCmp} from '../shared/filter/filter';

@Component({
  selector: 'customer',
  templateUrl: 'app/components/customer/customer.html',
  styleUrls: ['app/components/customer/customer.css'],
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, WrapperCmp, PaginationCmp, FilterCmp]
})

export class CustomerPage {
}
