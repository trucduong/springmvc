import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { WarehouseService, Input } from '../shared/index';

@Component({
  selector: 'warehouse-input',
  templateUrl: 'src/app/warehouse/input/input.html'
})

export class WarehouseInputCmp implements OnInit {
  constructor(
    private router: Router,
    private warehouseService: WarehouseService) { }

  inputs: Input[];

  ngOnInit() {
    this.inputs = this.warehouseService.getInputs();
  }

  onEdit(item: Input) {
    this.router.navigate(['/warehouse-input-detail', item.id]);
  }

  onAdd() {
    this.router.navigate(['/warehouse-input-detail', -1]);
  }

  onDelete(item: Input) {
    let result = this.warehouseService.deleteInput(item.id);
    // check result

    // reload
    this.ngOnInit();
  }

}