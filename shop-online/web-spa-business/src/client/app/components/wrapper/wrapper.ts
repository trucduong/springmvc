import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {Header} from '../header/header'

@Component({
  selector: 'wrapper',
  templateUrl: 'app/components/wrapper/wrapper.html',
  directives: [Header, CORE_DIRECTIVES]
})

export class WrapperCmp {
}
