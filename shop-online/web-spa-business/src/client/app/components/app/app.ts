import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';
// import {HTTP_PROVIDERS} from 'http/http';

import {HomePage} from '../home/home';
import {AuthPage} from '../auth/auth';
import {BlankPage} from '../blank/blank';
import {NameList} from '../../shared/index';

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
  { path: '/blank', component: BlankPage, name: 'App.blank' },
  { path: '/login', component: AuthPage, name: 'Auth' }
])
export class App {
}
