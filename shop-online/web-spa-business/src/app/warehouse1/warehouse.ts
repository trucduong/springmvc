import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Warehouse } from './shared/index';
import { WarehouseService} from './shared/index';


@Component({
  selector: 'warehouse',
  templateUrl: 'src/app/warehouse/warehouse.html'
})

export class WarehouseCmp implements OnInit  {
  constructor(
    private router: Router,
    private warehouseService: WarehouseService) { }

  warehouses: Warehouse[];


  ngOnInit() {
    this.warehouses = this.warehouseService.getWarehouses();
  }

   onEdit(item: Warehouse) {
    this.router.navigate(['/warehouse-detail', item.id]);
  }

   onAdd() {
    this.router.navigate(['/warehouse-detail', -1]);
  }

  onDelete(item: Warehouse) {
    let result = this.warehouseService.deleteWarehouse(item.id);
    // check result

    // reload
    this.ngOnInit();
    
}

}