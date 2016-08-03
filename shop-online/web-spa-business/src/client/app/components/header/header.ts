import {Component} from 'angular2/core';

import {HeaderNotification} from '../header/notification/notification'
import {Sidebar} from '../header/sidebar/sidebar'


@Component({
  selector: 'header',
  templateUrl: 'app/components/header/header.html',
  directives: [Sidebar, HeaderNotification]
})
export class Header {

}


