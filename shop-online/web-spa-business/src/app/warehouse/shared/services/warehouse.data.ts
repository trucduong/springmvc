import {Warehouse} from '../models/warehouse';
import {WarehouseInput} from '../models/warehouse.input';
import {ReturningFromCustomer} from '../models/warehouse.returning-from-customer';
import {ReturningToSupplier} from '../models/warehouse.returning-to-supplier';
import {Transferring} from '../models/warehouse.transferring';
import {Inventory} from '../models/warehouse.inventory';

export const WAREHOUSES: Warehouse[] = [
    {id: '1', name: 'cty tnhh hoang',address: '123 LTK',phone: 'mr hoang',status: '0989',use: 'si',branch:'89998990',note: 'tot'},
    {id: '2', name: 'cty tnhh hoang',address: '123 LTK',phone: 'mr hoang',status: '0989',use: 'si',branch:'89998990',note: 'tot'},
    {id: '3', name: 'cty tnhh hoang',address: '123 LTK',phone: 'mr hoang',status: '0989',use: 'si',branch:'89998990',note: 'tot'},
    {id: '4', name: 'cty tnhh hoang',address: '123 LTK',phone: 'mr hoang',status: '0989',use: 'si',branch:'89998990',note: 'tot'},
    {id: '5', name: 'cty tnhh hoang',address: '123 LTK',phone: 'mr hoang',status: '0989',use: 'si',branch:'89998990',note: 'tot'},
    {id: '6', name: 'cty tnhh hoang',address: '123 LTK',phone: 'mr hoang',status: '0989',use: 'si',branch:'89998990',note: 'tot'},
    {id: '7', name: 'cty tnhh hoang',address: '123 LTK',phone: 'mr hoang',status: '0989',use: 'si',branch:'89998990',note: 'tot'},
    {id: '8', name: 'cty tnhh hoang',address: '123 LTK',phone: 'mr hoang',status: '0989',use: 'si',branch:'89998990',note: 'tot'},
    {id: '9', name: 'cty tnhh hoang',address: '123 LTK',phone: 'mr hoang',status: '0989',use: 'si',branch:'89998990',note: 'tot'}
]

export const WAREHOUSEINPUTS: WarehouseInput[] = [
    {id:'1',name:'hang 1', unit:'chiec',quantity:'5',input_price:'5000', retail_price:'10000',total:'25000',note:'note 1'},
     {id:'2',name:'hang 2', unit:'cai',quantity:'10',input_price:'5000', retail_price:'10000',total:'50000',note:'note 2'},
      {id:'3',name:'hang 3', unit:'chiec',quantity:'5',input_price:'5000', retail_price:'10000',total:'25000',note:'note 1'}
]

export const RETURNINGFROMCUSTOMERS: ReturningFromCustomer[] = [
    {id: '1',name: 'giay',unit:'chiec', quantity_bought: '20',quantity_to_return : '5',selling_price: '2000',discount: '0',total: '10000',return_money:'10000'},
    {id: '2',name: 'ao',unit:'chiec', quantity_bought: '20',quantity_to_return : '5',selling_price: '2000',discount: '0',total: '10000',return_money:'10000'}
]

export const TRANSFERRINGS: Transferring[] = [
    {id: '1', name:'giay',unit:'chiec',inventories:'20',quantity_for_tranfer:'5',input_price:'1000',total:'5000',note:'sp1'},
    {id: '2', name:'ao',unit:'chiec',inventories:'10',quantity_for_tranfer:'5',input_price:'1000',total:'5000',note:'sp1'},
    {id: '3', name:'quan',unit:'chiec',inventories:'9',quantity_for_tranfer:'5',input_price:'1000',total:'5000',note:'sp1'},
]

export const RETURNINGTOSUPPLIERS: ReturningToSupplier[] = [
    {id: '1',name: 'giay',unit:'chiec', quantity_inventories: '20',quantity_to_return : '5',input_price: '2000',total: '10000',note:'10000'},
    {id: '2',name: 'ao',unit:'chiec', quantity_inventories: '20',quantity_to_return : '5',input_price: '2000',total: '0',note: '10000'}
]

export const INVENTORYS:Inventory[] = [
    {id: '1',name: 'giay', unit: 'chiec',input_price: '30000', inventory_quantity: '10',real_quantity: '5', disparity: '-5',note: 'mat trom'},
    {id: '1',name: 'giay', unit: 'chiec',input_price: '30000', inventory_quantity: '10',real_quantity: '5', disparity: '-5',note: 'mat trom'},
    {id: '1',name: 'giay', unit: 'chiec',input_price: '30000', inventory_quantity: '10',real_quantity: '5', disparity: '-5',note: 'mat trom'},
    {id: '1',name: 'giay', unit: 'chiec',input_price: '30000', inventory_quantity: '10',real_quantity: '5', disparity: '-5',note: 'mat trom'},
    {id: '1',name: 'giay', unit: 'chiec',input_price: '30000', inventory_quantity: '10',real_quantity: '5', disparity: '-5',note: 'mat trom'},
    {id: '1',name: 'giay', unit: 'chiec',input_price: '30000', inventory_quantity: '10',real_quantity: '5', disparity: '-5',note: 'mat trom'},
    {id: '1',name: 'giay', unit: 'chiec',input_price: '30000', inventory_quantity: '10',real_quantity: '5', disparity: '-5',note: 'mat trom'},
 
]


