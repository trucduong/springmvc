import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {WrapperCmp} from '../shared/components/index';

@Component({
  selector: 'timeline',
  templateUrl: 'timeline.html',
  styleUrls: ['timeline.css'],
  directives: [CORE_DIRECTIVES]
})
class TimelineCmp {}

@Component({
  selector: 'notifications',
  templateUrl: 'notifications.html',
  directives: [CORE_DIRECTIVES]
})
class NotificationCmp {}

@Component({
  selector: 'chat',
  templateUrl: 'chat.html',
  directives: [CORE_DIRECTIVES]
})
class ChatCmp {}

@Component({
  selector: 'stats',
  templateUrl: 'stats.html',
  properties: ['number', 'comments', 'colour', 'type'],
  directives: [CORE_DIRECTIVES]
})
class StatsCmp {
  number:number;
  comments:string;
  colour:string;
  type:string;
}

@Component({
  selector: 'home',
  templateUrl: 'home.html',
  styleUrls: ['home.css'],
  directives: [WrapperCmp, StatsCmp, TimelineCmp, NotificationCmp, ChatCmp, CORE_DIRECTIVES]
})
export class HomeCmp {
}
