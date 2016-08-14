import { Injectable } from 'angular2/core';

import {CustomerGroup} from '../models/index';
import {CUSTOMER_GROUPS} from './customer.service.mock'

@Injectable()
export class CustomerService {
public getCustomerGroup(id) {
    return Promise.resolve(CUSTOMER_GROUPS[0]);
}

}