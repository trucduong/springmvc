import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {TranslateService} from 'ng2-translate/ng2-translate';

import { Branch, BranchService } from '../shared/index';
import { AlertType } from './../../shared/index';
import { EditController } from './../../shared/index';

@Component({
    selector: 'branch-detail',
    templateUrl: 'src/app/branch/detail/detail.html'
})

export class BranchDetailCmp extends EditController<Branch> implements OnInit {
    constructor(
        route: ActivatedRoute,
        router: Router,
        translate: TranslateService,
        private branchService: BranchService) {
        super(route, router, translate);
    }

    getCurrentUrl(): string {
        return '/branch-detail';
    }

    createModel(): Branch {
        return new Branch();
    }

    load(id: any): Branch {
        return this.branchService.getBranch(id);
    }

    validate(model: Branch): boolean {
        // TODO: validate Branch here

        // call this.addError(field, message) if has any error

        return true;
    }

    save(model: Branch): boolean {
        return this.branchService.saveBranch(model, this.isEditing);
    }
}