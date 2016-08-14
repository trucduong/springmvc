import { Component, OnInit } from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Router} from 'angular2/router';

import {WrapperCmp} from '../../shared/wrapper/wrapper';
import {PaginationCmp} from '../../shared/pagination/pagination';
import {FilterCmp} from '../../shared/filter/filter';

@Component({
    selector: 'customer-group',
    templateUrl: 'app/components/customer/group/customer.group.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, WrapperCmp, PaginationCmp, FilterCmp]
})
export class CustomerGroupPage implements OnInit {
    selectedItem = 1;

    constructor(
        private router: Router) { }

    ngOnInit() { }

    add() {
        this.router.navigate(['App.customer.group.detail', -1]);  // Use default id = -1
    }

    edit() {
        this.router.navigate(['App.customer.group.detail', this.selectedItem]);
    }
}
