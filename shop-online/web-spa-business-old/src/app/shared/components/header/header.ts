import {Component} from '@angular/core';

import {HeaderNotification} from './notification/notification';
import {HeaderSidebar} from './sidebar/sidebar';


@Component({
  selector: 'header',
  templateUrl: 'header.html',
  directives: [HeaderSidebar, HeaderNotification]
})
export class Header {

}


