import {Component} from 'angular2/core';
import {ACCORDION_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {HeaderSearch} from '../search/search'

@Component({
  selector: 'sidebar',
  templateUrl: 'app/components/header/sidebar/sidebar.html',
  directives: [ROUTER_DIRECTIVES, HeaderSearch, ACCORDION_DIRECTIVES]
})
export class Sidebar {
}