import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {WrapperCmp} from '../wrapper/wrapper';

@Component({
  selector: 'blank',
  templateUrl: 'app/components/blank/blank.html',
  styleUrls: ['app/components/blank/blank.css'],
  directives: [WrapperCmp, CORE_DIRECTIVES]
})

export class BlankPage {
}
