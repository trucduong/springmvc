import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {TranslateService} from 'ng2-translate/ng2-translate';

import { ListController, GridHeader, SortInfo, FilterInfo } from './../shared/index';
import { Supplier } from './shared/index';
import { SupplierService} from './shared/index';

const headers: GridHeader[] = [
  { name: 'id', labelKey: 'supplier.list.id', sortable: true, width: 10 },
  { name: 'name', labelKey: 'supplier.list.name', sortable: true, width: 10 },
  { name: 'address', labelKey: 'common.list.address', sortable: true, width: 10 },
  { name: 'contact', labelKey: 'supplier.list.contact', sortable: true, width: 10 },
  { name: 'phone', labelKey: 'common.list.phone', sortable: true, width: 10 },
  { name: 'email', labelKey: 'common.list.email', sortable: true, width: 10 },
  { name: 'fax', labelKey: 'common.list.fax', sortable: true, width: 10 },
  { name: 'birthDay', labelKey: 'common.list.birthDay', sortable: true, width: 10 },
  { name: 'supplierGroup', labelKey: 'supplier.list.supplierGroup', sortable: true, width: 10 },
  { name: 'fax', labelKey: 'common.list.fax', sortable: true, width: 10 }
];

@Component({
  selector: 'supplier',
  templateUrl: 'src/app/supplier/supplier.html'
})

export class SupplierCmp extends ListController<Supplier> implements OnInit  {
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

  load(): Supplier[] {
    return this.supplierService.getSuppliers();
  }

  getCurrentUrl(): string {
    return '/supplier';
  }

  getDetailUrl(): string {
    return '/supplier-detail';
  }

  delete(item: Supplier): boolean {
    return this.supplierService.deleteSupplier(item.id);
  }

}