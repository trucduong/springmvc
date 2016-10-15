import { ProductGroup } from '../models/product.group';
import {Product} from '../models/product';
import { Unit } from '../models/unit';


export const PRODUCT_GROUPS: ProductGroup[] = [
    { id: '1', name: 'group 1', status: 'status for product 1', note:'4' },
    { id: '2', name: 'group 2', status: 'status for product 2', note:'4' },
    { id: '3', name: 'group 3', status: 'status for product 3', note:'4' },
    { id: '4', name: 'group 4', status: 'status for product 4' , note:'4'},
    { id: '5', name: 'group 5', status: 'status for product 5' , note:'4'},
    { id: '6', name: 'group 6', status: 'status for product 6' , note:'4'},
    { id: '7', name: 'group 7', status: 'status for product 7' , note:'4'},
    { id: '8', name: 'group 8', status: 'status for product 8' , note:'4'},
    { id: '9', name: 'group 9', status: 'status for product 9', note:'4' },
    { id: '10', name: 'group 10', status: 'status for product 10' , note:'4'},
    { id: '11', name: 'group 11', status: 'status for product 11', note:'4' },
    { id: '12', name: 'group 12', status: 'status for product 12' , note:'4'},
    { id: '13', name: 'group 13', status: 'status for product 13', note:'4' },
    { id: '14', name: 'group 14', status: 'status for product 14', note:'4' },
    { id: '15', name: 'group 15', status: 'status for product 15', note:'4' },
    { id: '16', name: 'group 16', status: 'status for product 16' , note:'4'},
    { id: '17', name: 'group 17', status: 'status for product 17' , note:'4'},
    { id: '18', name: 'group 18', status: 'status for product 18' , note:'4'},
    { id: '19', name: 'group 19', status: 'status for product 19', note:'4' },
    { id: '20', name: 'group 20', status: 'status for product 20' , note:'4'},
    { id: '21', name: 'group 21', status: 'status for product 21' , note:'4'},
    { id: '22', name: 'group 22', status: 'status for product 22' , note:'4'},
    { id: '23', name: 'group 23', status: 'status for product 23', note:'4' },
    { id: '24', name: 'group 24', status: 'status for product 24' , note:'4'},
    { id: '25', name: 'group 25', status: 'status for product 25' , note:'4'},
    { id: '26', name: 'group 26', status: 'status for product 26' , note:'4'},
    { id: '27', name: 'group 27', status: 'status for product 27', note:'4' },
    { id: '28', name: 'group 28', status: 'status for product 28', note:'4' },
    { id: '29', name: 'group 29', status: 'status for product 29' , note:'4'},
    { id: '30', name: 'group 30', status: 'status for product 30', note:'4' },
];

export const PRODUCTS: Product[] = [
    {id: '1', name: 'hoang',image: '0989',unit: 'si',inputPrice: '123 LTK',wholesalePrice: 'lan@gmail.com',retailPrice: 'nu',productGroup: '17/08/1990',alarmInventory: '10000000',status: '20',note: '0'},
    {id: '2', name: 'lan',image: '0903',unit: 'si',inputPrice: '123 LTK',wholesalePrice: 'khue@gmail.com',retailPrice: 'nam',productGroup: '17/08/1990',alarmInventory: '10000000',status: '20',note: '0'},
    {id: '3', name: 'tuan',image: '0987',unit: 'si',inputPrice: '123 LTK',wholesalePrice: 'nhu@gmail.com',retailPrice: 'nam',productGroup: '17/08/1990',alarmInventory: '10000000',status: '20',note: '0'},
    {id: '4', name: 'hoang',image: '0989',unit: 'si',inputPrice: '123 LTK',wholesalePrice: 'lan@gmail.com',retailPrice: 'nu',productGroup: '17/08/1990',alarmInventory: '10000000',status: '20',note: '0'},
    {id: '5', name: 'lan',image: '0903',unit: 'si',inputPrice: '123 LTK',wholesalePrice: 'khue@gmail.com',retailPrice: 'nam',productGroup: '17/08/1990',alarmInventory: '10000000',status: '20',note: '0'},
    {id: '6', name: 'tuan',image: '0987',unit: 'si',inputPrice: '123 LTK',wholesalePrice: 'nhu@gmail.com',retailPrice: 'nam',productGroup: '17/08/1990',alarmInventory: '10000000',status: '20',note: '0'},
    {id: '7', name: 'hoang',image: '0989',unit: 'si',inputPrice: '123 LTK',wholesalePrice: 'lan@gmail.com',retailPrice: 'nu',productGroup: '17/08/1990',alarmInventory: '10000000',status: '20',note: '0'},
    {id: '8', name: 'lan',image: '0903',unit: 'si',inputPrice: '123 LTK',wholesalePrice: 'khue@gmail.com',retailPrice: 'nam',productGroup: '17/08/1990',alarmInventory: '10000000',status: '20',note: '0'},
    {id: '9', name: 'tuan',image: '0987',unit: 'si',inputPrice: '123 LTK',wholesalePrice: 'nhu@gmail.com',retailPrice: 'nam',productGroup: '17/08/1990',alarmInventory: '10000000',status: '20',note: '0'}
]


export const UNITS: Unit[] = [
    {id:'1', name:'kg',note: 'note 1'},
    {id:'2', name:'chiec',note: 'note 2'},
    {id:'3', name:'cai',note: 'note 3'},

]