import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {WrapperCmp} from '../wrapper/wrapper';

@Component({
  selector: 'blank',
  templateUrl: 'app/components/typography/blank.html',
  styleUrls: ['app/components/typography/blank.css'],
  directives: [WrapperCmp, CORE_DIRECTIVES]
})
export class BlankPage {
  
}
