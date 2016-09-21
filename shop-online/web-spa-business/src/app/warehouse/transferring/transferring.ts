import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { WarehouseService, Transferring } from '../shared/index';

@Component({
  selector: 'warehouse-transferring',
  templateUrl: 'src/app/warehouse/transferring/transferring.html'
})

export class WarehouseTransferringCmp implements OnInit {
  constructor(
    private router: Router,
    private warehouseService: WarehouseService) { }

  transferrings: Transferring[];

  ngOnInit() {
    this.transferrings = this.warehouseService.getTransferrings();
  }

  onEdit(item: Transferring) {
    this.router.navigate(['/warehouse-transferring-detail', item.id]);
  }

  onAdd() {
    this.router.navigate(['/warehouse-transferring-detail', -1]);
  }

  onDelete(item: Transferring) {
    let result = this.warehouseService.deleteTransferring(item.id);
    // check result

    // reload
    this.ngOnInit();
  }

}