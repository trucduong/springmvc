import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import {Header} from '../index'

@Component({
  moduleId: module.id,
  selector: 'wrapper',
  templateUrl: 'app/shared/components/wrapper/wrapper.html',
  directives: [Header, CORE_DIRECTIVES]
})

export class WrapperCmp {
}
