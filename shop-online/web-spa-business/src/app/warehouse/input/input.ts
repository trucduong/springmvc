import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {TranslateService} from 'ng2-translate/ng2-translate';

import { ListController, GridHeader, SortInfo, FilterInfo, DialogInfo, DialogService, AutoCompleteInfo } from '../../shared/index';
import { WarehouseInput, WarehouseService } from '../shared/index';

const headers: GridHeader[] = [
  { name: 'id', labelKey: 'warehouseInput.list.id', sortable: true, width: 10 },
  { name: 'name', labelKey: 'warehouseInput.list.name', sortable: true, width: 10 },
  { name: 'unit', labelKey: 'warehouseInput.list.unit', sortable: true, width: 10 },
  { name: 'quantity', labelKey: 'warehouseInput.list.quantity', sortable: true, width: 10 },
  { name: 'input_price', labelKey: 'warehouseInput.list.input_price', sortable: true, width: 10 },
  { name: 'retail_price', labelKey: 'warehouseInput.list.retail_price', sortable: true, width: 10 },
  { name: 'total', labelKey: 'warehouseInput.list.total', sortable: true, width: 10 },
  { name: 'note', labelKey: 'common.list.note', sortable: true, width: 10 }
];


@Component({
  selector: 'warehouse-input',
  templateUrl: 'src/app/warehouse/input/input.html',
   styleUrls: ['src/app/warehouse/input/input.css']
})

export class WarehouseInputCmp extends ListController<WarehouseInput> implements OnInit {

  private dialogInfo: DialogInfo;
  // TODO: 
  private item: WarehouseInput;
  private autoComplete: AutoCompleteInfo;
  private acData: string[];

  constructor(
    route: ActivatedRoute,
    router: Router,
    translate: TranslateService,
    private warehouseService: WarehouseService,
    private dialogService: DialogService) {

    super(route, translate, router);
    this.dialogInfo = new DialogInfo();

    this.acData = [];
    this.autoComplete = new AutoCompleteInfo('Nhap theo ma hoac ten san pham');
  }


  getHeaders(): GridHeader[] {
    return headers;
  }

  getDefaultSort(): SortInfo {
    return new SortInfo('name', 'asc');
  }

  load(): WarehouseInput[] {
    return this.warehouseService.getWarehouseInputs();
  }

  getCurrentUrl(): string {
    return '/warehouse-input';
  }

  getDetailUrl(): string {
    return '/warehouse-input-detail';
  }

  onEdit(item: WarehouseInput) {
    // TODO: set data

    this.dialogService.show(this.dialogInfo);
  }

  onAdd() {
    // TODO: init data

    this.dialogService.show(this.dialogInfo);
  }

  delete(item: WarehouseInput): boolean {
    return this.warehouseService.deleteWarehouseInput(item.id);
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

  onSearch(searchText: string){
    this.acData.push('1|ahah|huhu');
    this.acData.push('2|ahah|huhu');
    this.acData.push('3|ahah|huhu');
    this.acData.push('4|ahah|huhu');
    this.acData.push('5|ahah|huhu');
    this.acData.push('6|ahah|huhu');
    this.acData.push('7|ahah|huhu');
    this.acData.push('8|ahah|huhu');
    this.acData.push('9|ahah|huhu');
    this.acData.push('10|ahah|huhu');
    this.acData.push('11|ahah|huhu');
    this.acData.push('12|ahah|huhu');
    this.acData.push('13|ahah|huhu');
    this.acData.push('14|ahah|huhu');
    this.acData.push('15|ahah|huhu');
    this.acData.push('16|ahah|huhu');

    
  }

  
}