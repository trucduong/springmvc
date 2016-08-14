import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';
// import {HTTP_PROVIDERS} from 'http/http';

import {HomePage} from '../home/home';
import {AuthPage} from '../auth/auth';
import {BlankPage} from '../blank/blank';
import {CustomerPage} from '../customer/index';
import {CustomerGroupPage} from '../customer/index'
import {CustomerGroupDetailPage} from '../customer/index'

import {NameList} from '../../services/index';

@Component({
  selector: 'app',
  viewProviders: [NameList],
  templateUrl: 'app/components/app/app.html',
  styleUrls: ['app/components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: HomePage, name: 'App.home' },
  { path: '/home', component: HomePage, name: 'App.home' },

  { path: '/customer', component: CustomerPage, name: 'App.customer' },
  { path: '/customer-group', component: CustomerGroupPage, name: 'App.customer.group' },
  { path: '/customer-group/detail/:id', component: CustomerGroupDetailPage, name: 'App.customer.group.detail' },
  
  { path: '/blank', component: BlankPage, name: 'App.blank' },
  { path: '/login', component: AuthPage, name: 'Auth' }
])
export class App {
}
