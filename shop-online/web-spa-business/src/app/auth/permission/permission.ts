import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {TranslateService} from 'ng2-translate/ng2-translate';

import { ListController, GridHeader, SortInfo, FilterInfo, BaseController } from '../../shared/index';
import { Permission, Account, PermissionGroup } from '../shared/index';
import {ACCOUNTS, PERMISSION_GROUPS} from '../shared/index';

import { AuthService} from '../shared/index';

const headers: GridHeader[] = [
  { name: 'id', labelKey: 'permission.list.id', sortable: true, width: 10 },
  { name: 'name', labelKey: 'permission.list.name', sortable: true, width: 30 },
  { name: 'note', labelKey: 'common.list.note', sortable: true, width: 20 },
  { name: 'nameGroup', labelKey: 'common.list.note', sortable: true, width: 20 },

];

@Component({
  selector: 'permission',
  templateUrl: 'src/app/auth/permission/permission.html'
})

export class PermissionCmp  extends BaseController implements OnInit {
    constructor(    
                private route: ActivatedRoute, 
                router: Router, 
                translate: TranslateService
                ) {
        super(router, translate);
    }

      model: Account;

   
   getCurrentUrl(): string {
    return '/account-grant';
  }

  ngOnInit() {
        this.showLoading();

        this.route.params.forEach((params: any) => {
            let id = params['id'];
            if (id) {
                this.model = this.load(id);
            }
        });

        this.hideLoading();


    }


    load(id: string):any{
        let account: Account;
        ACCOUNTS.forEach(element => {
            if (element.id == id) {
                account = element;
                return;
            }
        });
        return account;
    }


}