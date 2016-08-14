import { Component, OnInit } from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES, ActivatedRoute} from 'angular2/router';

import {WrapperCmp} from '../../../shared/wrapper/wrapper';
import {CustomerService} from '../../../../services/index';
import {CustomerGroup} from '../../../../models/index';

@Component({
    selector: 'customer-group-detail',
    templateUrl: 'app/components/customer/group/detail/customer.group.detail.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, WrapperCmp],
    providers:[CustomerService]
})
export class CustomerGroupDetailPage implements OnInit {
    active = true;
    model: CustomerGroup;

    constructor(cusomerService: CustomerService) { }

    ngOnInit() { }


}
