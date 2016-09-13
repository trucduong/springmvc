import { Injectable } from '@angular/core';

import {CustomerGroup} from '../index';
import {CUSTOMER_GROUPS} from './customer.service.mock'

@Injectable()
export class CustomerService {
    public getCustomerGroup(id) {
        return Promise.resolve(CUSTOMER_GROUPS[0]);
    }

}