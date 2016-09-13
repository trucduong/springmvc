import { Component, OnInit } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';

import {WrapperCmp} from '../../../shared/components/index';
import {CustomerService, CustomerGroup} from '../../shared/index';

@Component({
    selector: 'customer-group-detail',
    templateUrl: 'customer.group.detail.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, WrapperCmp],
    providers:[CustomerService]
})
export class CustomerGroupDetailCmp implements OnInit {
    active = true;
    model: CustomerGroup;

    constructor(cusomerService: CustomerService) { }

    ngOnInit() { }


}
