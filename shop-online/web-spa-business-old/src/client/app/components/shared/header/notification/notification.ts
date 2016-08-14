import {Component, ElementRef} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'header-notification',
  templateUrl: 'app/components/shared/header/notification/notification.html',
  directives: [DROPDOWN_DIRECTIVES, ROUTER_DIRECTIVES, CORE_DIRECTIVES],
  viewProviders: [DROPDOWN_DIRECTIVES, ElementRef]
})

export class HeaderNotification {
  toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }
}
