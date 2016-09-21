import {SupplierGroup} from '../models/supplier.group';
import {Supplier} from '../models/supplier';


export const SUPPLIER_GROUPS: SupplierGroup[] = [
    {id: '1', name: 'group 1', note: 'note 1'},
    {id: '2', name: 'group 2', note: 'note 2'},
    {id: '3', name: 'group 3', note: 'note 3'},
]; 

export const SUPPLIER: Supplier[] = [
    {name: 'nga', phone:'0989', birth_day:'1990-1-3', sex:'nam', address_detail:'qqq', address_1:'hihu', address_2:'hu', address_3: 'lo', properties:'1'},
     {name: 'xuan', phone:'0900', birth_day:'1990-1-3', sex:'nu', address_detail:'qqq', address_1:'hihu', address_2:'hu', address_3: 'lo', properties:'2'},
     {name: 'mai', phone:'090011', birth_day:'1992-1-3', sex:'nu', address_detail:'ppp', address_1:'hiha', address_2:'ou', address_3: 'l', properties:'3'}
]