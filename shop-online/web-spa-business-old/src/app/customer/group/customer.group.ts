import { Component, OnInit } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Router} from '@angular/router';

import {WrapperCmp, PaginationCmp, FilterCmp} from '../../shared/components/index';

@Component({
    selector: 'customer-group',
    templateUrl: 'customer.group.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, WrapperCmp, PaginationCmp, FilterCmp]
})
export class CustomerGroupCmp implements OnInit {
    selectedItem = 1;

    constructor(
        private router: Router) { }

    ngOnInit() { }

    add() {
        this.router.navigate(['/customer-group/detail', -1]);  // Use default id = -1
    }

    edit() {
        this.router.navigate(['/customer-group/detail', this.selectedItem]);
    }
}
