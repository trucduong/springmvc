import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {WrapperCmp} from '../shared/components/index';

@Component({
  selector: 'timeline',
  templateUrl: 'app/home/timeline.html',
  styleUrls: ['app/home/timeline.css'],
  directives: [CORE_DIRECTIVES]
})
class TimelineCmp {}

@Component({
  selector: 'notifications',
  templateUrl: 'app/home/notifications.html',
  directives: [CORE_DIRECTIVES]
})
class NotificationCmp {}

@Component({
  selector: 'chat',
  templateUrl: 'app/home/chat.html',
  directives: [CORE_DIRECTIVES]
})
class ChatCmp {}

@Component({
  selector: 'stats',
  templateUrl: 'app/home/stats.html',
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
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  directives: [WrapperCmp, StatsCmp, TimelineCmp, NotificationCmp, ChatCmp, CORE_DIRECTIVES]
})
export class HomeCmp {
}
