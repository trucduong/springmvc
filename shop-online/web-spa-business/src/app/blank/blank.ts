import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {WrapperCmp} from '../shared/components/index';

@Component({
  selector: 'blank',
  templateUrl: 'app/blank/blank.html',
  styleUrls: ['app/blank/blank.css'],
  directives: [WrapperCmp, CORE_DIRECTIVES]
})

export class BlankCmp {
}
