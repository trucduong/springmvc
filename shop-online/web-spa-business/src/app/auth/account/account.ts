import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {TranslateService} from 'ng2-translate/ng2-translate';

import { ListController, GridHeader, SortInfo, FilterInfo,GridAction } from '../../shared/index';
import { AuthService, Account } from '../shared/index';

const headers: GridHeader[] = [
  { name: 'id', labelKey: 'account.list.id', sortable: true, width: 10 },
  { name: 'branch', labelKey: 'account.list.branch', sortable: true, width: 20 },
  { name: 'name', labelKey: 'account.list.name', sortable: true, width: 20 },
  { name: 'loginName', labelKey: 'account.list.loginName', sortable: true, width: 20 },
  { name: 'status', labelKey: 'common.list.status', sortable: true, width: 10 },
  { name: 'note', labelKey: 'common.list.note', sortable: true, width: 20 },

];

@Component({
  selector: 'account',
  templateUrl: 'src/app/auth/account/account.html'
})

export class AccountCmp extends ListController<Account> implements OnInit {
  constructor(
    route: ActivatedRoute,
    router: Router,
    translate: TranslateService,
    private authService: AuthService) {

    super(route, translate, router);
  }

  getHeaders(): GridHeader[] {
    return headers;
  }


  getActions(): GridAction[] {
        let actions: GridAction[] = [
            {name:'edit', type:'btn-warning', icon:'fa fa-pencil'},
            {name:'delete', type:'btn-danger', icon:'fa fa-times'},
            {name:'grant',type:'btn-danger',icon:'fa fa-pencil'}
        ];
        return actions;
  }

  execute(param: any) {

      if (param.action == 'grant') {
           this.navigateTo(['account-grant',param.data['id']]);
        } 
  }


  getDefaultSort(): SortInfo {
    return new SortInfo('name', 'asc');
  }

  getDefaultFilter(): FilterInfo {
    return new FilterInfo(['name', 'note']);
  }

  load(): Account[] {
    return this.authService.getAccounts();
  }

   getCurrentUrl(): string {
    return '/account';
  }

  getDetailUrl(): string {
    return '/account-detail';
  }

  delete(item: Account): boolean {
    return this.authService.deleteAccount(item.id);
  }
}