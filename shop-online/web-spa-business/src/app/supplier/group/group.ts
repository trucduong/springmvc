import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { SupplierService, SupplierGroup } from '../shared/index';

@Component({
  selector: 'supplier-group',
  templateUrl: 'src/app/supplier/group/group.html'
})

export class SupplierGroupCmp implements OnInit  {
  constructor(
    private router: Router,
    private supplierService: SupplierService) { }

      supplierGroups: SupplierGroup[];

  ngOnInit() {
    this.supplierGroups = this.supplierService.getSupplierGroups();
  }

  onEdit(item: SupplierGroup) {
    this.router.navigate(['/supplier-group-detail', item.id]);
  }

  onAdd() {
    this.router.navigate(['/supplier-group-detail', -1]);
  }

    onDelete(item: SupplierGroup) {
    let result = this.supplierService.deleteSupplierGroup(item.id);
    // check result

    // reload
    this.ngOnInit();
  }


}