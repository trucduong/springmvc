import {Account} from '../models/account';
import {Permission} from '../models/permission';
import {PermissionGroup} from '../models/permissionGroup';


export const PERMISSION_LIST :Permission[] =[
    {id:'1',name:'khoa tk', note:'1'},
    {id:'2',name:'xem kho', note:'2'},
    {id:'3',name:'doanh so', note:'3'},
    {id:'4',name:'hang ton', note:'4'}
 
]

export const PERMISSION_GROUPS :PermissionGroup[] =[
    {id:'1',nameGroup:'admin',permission:[{id:'1',name:'khoa tk', note:'1'},{id:'2',name:'xem kho', note:'2'}],note:'1'},
    {id:'2',nameGroup:'thu ngan',permission:[ {id:'2',name:'xem kho', note:'2'}],note:'2'}
]


export const ACCOUNTS: Account[] = [
    {id:'1',branch:'VTU',name:'minh duc', loginName:'minhduc',status:'1',note:'he', permission:[ {id:'1',name:'khoa tk', note:'1'},{id:'2',name:'xem kho', note:'2'}] },
    {id:'2',branch:'VTU',name:'lam', loginName:'lamlam',status:'1',note:'he', permission:[{id:'1',name:'khoa tk', note:'1'}]},
    {id:'3',branch:'HCM',name:'khoa', loginName:'khoa',status:'1',note:'he', permission:[{id:'1',name:'khoa tk', note:'1'},{id:'2',name:'xem kho', note:'2'}]},
    {id:'4',branch:'HCM',name:'minh', loginName:'minh',status:'1',note:'he' ,permission:[{id:'1',name:'khoa tk', note:'1'}]},
]