import {Component, ElementRef} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'header-notification',
  templateUrl: 'app/shared/components/header/notification/notification.html',
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
  viewProviders: [ElementRef]
})

export class HeaderNotification {
  toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }
}
