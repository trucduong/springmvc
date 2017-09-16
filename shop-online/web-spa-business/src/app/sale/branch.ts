import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {TranslateService} from 'ng2-translate/ng2-translate';

import { ListController, GridHeader, SortInfo, FilterInfo } from './../shared/index';
import { Branch } from './shared/index';
import { BranchService} from './shared/index';

const headers: GridHeader[] = [
  { name: 'id', labelKey: 'branch.list.id', sortable: true, width: 10 },
  { name: 'name', labelKey: 'branch.list.name', sortable: true, width: 10 },
  { name: 'phone', labelKey: 'common.list.phone', sortable: true, width: 10 },
  { name: 'address', labelKey: 'common.list.address', sortable: true, width: 10 },
  { name: 'email', labelKey: 'common.list.email', sortable: true, width: 10 },
  { name: 'note', labelKey: 'common.list.note', sortable: true, width: 10 },
];

@Component({
  selector: 'branch',
  templateUrl: 'src/app/branch/branch.html'
})

export class BranchCmp extends ListController<Branch> implements OnInit  {
    constructor(
    route: ActivatedRoute,
    router: Router,
    translate: TranslateService,
    private branchService: BranchService) {

      super(route, translate, router);
    }

  getHeaders(): GridHeader[] {
    return headers;
  }

  getDefaultSort(): SortInfo {
    return new SortInfo('name', 'asc');
  }

  getDefaultFilter(): FilterInfo {
    return new FilterInfo(['name', 'note']);
  }

  load(): Branch[] {
    return this.branchService.getBranchs();
  }

  getCurrentUrl(): string {
    return '/branch';
  }

  getDetailUrl(): string {
    return '/branch-detail';
  }

  delete(item: Branch): boolean {
    return this.branchService.deleteBranch(item.id);
  }

}