import { CustomerGroup } from '../models/customer.group';
import {Customer} from '../models/customer';

export const CUSTOMER_GROUPS: CustomerGroup[] = [
    {id: '1', name: 'group 1', note: 'note for customer 1'},
    {id: '2', name: 'group 2', note: 'note for customer 2'},
];

export const CUSTOMER: Customer[] = [
    {name: 'lan', phone:'0989', birth_day:'1990-1-3', sex:'nam', address_detail:'qqq', address_1:'hihu', address_2:'hu', address_3: 'lo', properties:'1'},
     {name: 'diep', phone:'0900', birth_day:'1990-1-3', sex:'nu', address_detail:'qqq', address_1:'hihu', address_2:'hu', address_3: 'lo', properties:'2'},
     {name: 'linh', phone:'090011', birth_day:'1992-1-3', sex:'nu', address_detail:'ppp', address_1:'hiha', address_2:'ou', address_3: 'l', properties:'3'}
]