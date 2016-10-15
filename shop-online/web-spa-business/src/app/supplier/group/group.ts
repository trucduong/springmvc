import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {TranslateService} from 'ng2-translate/ng2-translate';

import { ListController, GridHeader, SortInfo, FilterInfo } from '../../shared/index';
import { SupplierService, SupplierGroup } from '../shared/index';

const headers: GridHeader[] = [
  { name: 'id', labelKey: 'supplier.group.list.id', sortable: true, width: 10 },
  { name: 'name', labelKey: 'supplier.group.list.name', sortable: true, width: 30 },
  { name: 'note', labelKey: 'common.list.note', sortable: true, width: 40 },
    { name: 'quatity', labelKey: 'supplier.group.list.quantity', sortable: true, width: 20 }

];

@Component({
  selector: 'supplier-group',
  templateUrl: 'src/app/supplier/group/group.html'
})
export class SupplierGroupCmp extends ListController<SupplierGroup> implements OnInit {
  constructor(
    route: ActivatedRoute,
    router: Router,
    translate: TranslateService,
    private supplierService: SupplierService) {

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

  load(): SupplierGroup[] {
    return this.supplierService.getSupplierGroups();
  }

  getCurrentUrl(): string {
    return '/supplier-group';
  }

  getDetailUrl(): string {
    return '/supplier-group-detail';
  }

  delete(item: SupplierGroup): boolean {
    return this.supplierService.deleteSupplierGroup(item.id);
  }
}