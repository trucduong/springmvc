import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {HeaderSearch} from '../search/search';

@Component({
  moduleId: module.id,
  selector: 'header-sidebar',
  templateUrl: 'app/shared/components/header/sidebar/sidebar.html',
  directives: [ROUTER_DIRECTIVES, HeaderSearch]
})
export class HeaderSidebar {
}
