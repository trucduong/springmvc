import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {TranslateService} from 'ng2-translate/ng2-translate';

import { ListController, GridHeader, SortInfo, FilterInfo, DialogInfo, DialogService } from '../../shared/index';
import { Transferring, WarehouseService } from '../shared/index';

const headers: GridHeader[] = [
  { name: 'id', labelKey: 'warehouseInput.list.id', sortable: true, width: 10 },
  { name: 'name', labelKey: 'warehouseInput.list.name', sortable: true, width: 10 },
  { name: 'unit', labelKey: 'warehouseInput.list.unit', sortable: true, width: 10 },
  { name: 'inventories', labelKey: 'warehouseInput.list.quantity', sortable: true, width: 10 },
  { name: 'quantity_for_tranfer', labelKey: 'warehouseInput.list.input_price', sortable: true, width: 10 },
  { name: 'input_price', labelKey: 'warehouseInput.list.retail_price', sortable: true, width: 10 },
  { name: 'total', labelKey: 'warehouseInput.list.total', sortable: true, width: 10 },
  { name: 'note', labelKey: 'common.list.note', sortable: true, width: 10 }

];


@Component({
  selector: 'warehouse-transferring',
  templateUrl: 'src/app/warehouse/transferring/transferring.html'
})

export class TransferringCmp extends ListController<Transferring> implements OnInit {

  private dialogInfo: DialogInfo;
  // TODO: 
  private item: Transferring;


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

  load(): Transferring[] {
    return this.warehouseService.getTransferrings();
  }

  getCurrentUrl(): string {
    return '/warehouse-ttransferring';
  }

  getDetailUrl(): string {
    return '/warehouse-ttransferring-detail';
  }

  onEdit(item: Transferring) {
    // TODO: set data

    this.dialogService.show(this.dialogInfo);
  }

  onAdd() {
    // TODO: init data

    this.dialogService.show(this.dialogInfo);
  }

  delete(item: Transferring): boolean {
    return this.warehouseService.deleteTransferring(item.id);
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