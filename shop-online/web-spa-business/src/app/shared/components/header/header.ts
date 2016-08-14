import {Component} from '@angular/core';

import {HeaderNotification} from './notification/notification';
import {HeaderSidebar} from './sidebar/sidebar';


@Component({
  moduleId: module.id,
  selector: 'header',
  templateUrl: 'app/shared/components/header/header.html',
  directives: [HeaderSidebar, HeaderNotification]
})
export class Header {

}


