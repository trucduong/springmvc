import {Warehouse} from '../models/warehouse';
import { Input } from '../models/warehouse.input';
import { Transferring } from '../models/warehouse.transferring';
import { ReturningFromCustomer } from '../models/warehouse.returning-from-customer';




export const WAREHOUSE: Warehouse[] = [
    {id:'1', name:'kho 1',address_1: 'note 1', address_2:'ad 2', address_3:'ad 3', phone:'09', status:'hu'},
    {id:'2', name:'kho 2',address_1: 'note 1', address_2:'ad 2', address_3:'ad 3', phone:'09', status:'hu'},
    {id:'3', name:'kho 3',address_1: 'note 1', address_2:'ad 2', address_3:'ad 3', phone:'09', status:'hu'}
]

export const INPUT: Input[] = [
    {id:'1',name:'hang 1', unit:'chiec',quantity:'5',input_price:'5000', retail_price:'10000',total:'25000',note:'note 1', properties:'1'},
     {id:'2',name:'hang 2', unit:'cai',quantity:'10',input_price:'5000', retail_price:'10000',total:'50000',note:'note 2', properties:'2'},
      {id:'3',name:'hang 3', unit:'chiec',quantity:'5',input_price:'5000', retail_price:'10000',total:'25000',note:'note 1', properties:'1'}
]

export const TRANSFERRING: Transferring[] = [
    {id: '1', name:'giay',unit:'chiec',inventories:'20',quantity_for_tranfer:'5',input_price:'1000',total:'5000',note:'sp1',action:'1'},
    {id: '2', name:'ao',unit:'chiec',inventories:'10',quantity_for_tranfer:'5',input_price:'1000',total:'5000',note:'sp1',action:'1'},
    {id: '3', name:'quan',unit:'chiec',inventories:'9',quantity_for_tranfer:'5',input_price:'1000',total:'5000',note:'sp1',action:'1'},

]

export const RETURNINGFROMCUSTOMER: ReturningFromCustomer[] = [
    {id: '1',name: 'giay',unit:'chiec', quantity_bought: '20',quantity_to_return : '5',selling_price: '2000',discount: '0',total: '10000',return_money:'10000',action: '1'},
    {id: '2',name: 'ao',unit:'chiec', quantity_bought: '20',quantity_to_return : '5',selling_price: '2000',discount: '0',total: '10000',return_money:'10000',action: '2'}
]