import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import {Header} from '../index'

@Component({
  selector: 'wrapper',
  templateUrl: 'wrapper.html',
  directives: [Header, CORE_DIRECTIVES]
})

export class WrapperCmp {
}
