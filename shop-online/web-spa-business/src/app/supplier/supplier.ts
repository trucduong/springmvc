import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Supplier } from './shared/index';
import { SupplierService} from './shared/index';


@Component({
  selector: 'supplier',
  templateUrl: 'src/app/supplier/supplier.html'
})

export class SupplierCmp implements OnInit  {
  constructor(
    private router: Router,
    private supplierService: SupplierService) { }

  suppliers: Supplier[];


  ngOnInit() {
    this.suppliers = this.supplierService.getSuppliers();
  }

   onEdit(item: Supplier) {
    this.router.navigate(['/supplier-detail', item.phone]);
  }

   onAdd() {
    this.router.navigate(['/supplier-detail', -1]);
  }

  onDelete(item: Supplier) {
    let result = this.supplierService.deleteSupplier(item.phone);
    // check result

    // reload
    this.ngOnInit();
    
}

}