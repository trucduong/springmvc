import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {TranslateService} from 'ng2-translate/ng2-translate';

import { AuthService, Account } from '../../shared/index';
import { AlertType } from '../../../shared/index';
import { EditController } from '../../../shared/index';

@Component({
    selector: 'account-detail',
    templateUrl: 'src/app/auth/account/detail/detail.html'
})

export class AccountDetailCmp extends EditController<Account> implements OnInit {
    constructor(
        route: ActivatedRoute,
        router: Router,
        translate: TranslateService,
        private accountService: AuthService) {
        super(route, router, translate);
    }

    getCurrentUrl(): string {
        return '/account-detail';
    }

    createModel(): Account {
        return new Account();
    }

    load(id: any): Account {
        return this.accountService.getAccount(id);
    }

    validate(model: Account): boolean {
        // TODO: validate customer group here

        // call this.addError(field, message) if has any error

        return true;
    }

    save(model: Account): boolean {
        return this.accountService.saveAccount(model, this.isEditing);
    }
}