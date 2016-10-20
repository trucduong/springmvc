import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {TranslateService} from 'ng2-translate/ng2-translate';

import { ListController, GridHeader, SortInfo, FilterInfo, DialogInfo, DialogService } from '../../shared/index';
import { ReturningToSupplier, WarehouseService } from '../shared/index';

const headers: GridHeader[] = [
  { name: 'id', labelKey: 'warehouseInput.list.id', sortable: true, width: 10 },
  { name: 'name', labelKey: 'warehouseInput.list.name', sortable: true, width: 10 },
  { name: 'unit', labelKey: 'warehouseInput.list.unit', sortable: true, width: 10 },
  { name: 'quantity_inventories', labelKey: 'warehouseInput.list.quantity', sortable: true, width: 10 },
  { name: 'quantity_to_return', labelKey: 'warehouseInput.list.input_price', sortable: true, width: 10 },
  { name: 'input_price', labelKey: 'warehouseInput.list.retail_price', sortable: true, width: 10 },
  { name: 'total', labelKey: 'common.list.note', sortable: true, width: 10 },
  { name: 'note', labelKey: 'warehouseInput.list.total', sortable: true, width: 10 },
];

@Component({
  selector: 'warehouse-returning-to-supplier',
  templateUrl: 'src/app/warehouse/returning-to-supplier/returning-to-supplier.html'
})

export class ReturningToSupplierCmp extends ListController<ReturningToSupplier> implements OnInit {

  private dialogInfo: DialogInfo;
  // TODO: 


  constructor(
    route: ActivatedRoute,
    router: Router,
    translate: TranslateService,
    private warehouseService: WarehouseService,
    private dialogService: DialogService) {

    super(route, translate, router);
    this.dialogInfo = new DialogInfo();
  }


  getHeaders(): GridHeader[] {
    return headers;
  }

  getDefaultSort(): SortInfo {
    return new SortInfo('name', 'asc');
  }

  load(): ReturningToSupplier[] {
    return this.warehouseService.getReturningFromCustomers();
  }

  getCurrentUrl(): string {
    return '/warehouse-returning-to-supplier';
  }

  getDetailUrl(): string {
    return '/warehouse-returning-to-supplier-detail';
  }

  onEdit(item: ReturningToSupplier) {
    // TODO: set data

    this.dialogService.show(this.dialogInfo);
  }

  onAdd() {
    // TODO: init data

    this.dialogService.show(this.dialogInfo);
  }

  delete(item: ReturningToSupplier): boolean {
    return this.warehouseService.deleteReturningToSupplier(item.id);
  }

  onSave() {
    // TODO: Add new item

    // TODO: Init data for new Product
  }

  onDialogClose() {
    // TODO: check closeable conditions

    this.dialogService.hide(this.dialogInfo);
    this.onLoad();
  }
}