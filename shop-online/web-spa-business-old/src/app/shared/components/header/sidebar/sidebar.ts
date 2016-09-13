import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {HeaderSearch} from '../search/search';

@Component({
  selector: 'header-sidebar',
  templateUrl: 'sidebar.html',
  directives: [ROUTER_DIRECTIVES, HeaderSearch]
})
export class HeaderSidebar {
}
