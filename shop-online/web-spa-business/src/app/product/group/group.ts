import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { ProductService, ProductGroup } from '../shared/index';

@Component({
  selector: 'product-group',
  templateUrl: 'src/app/product/group/group.html'
})

export class ProductGroupCmp implements OnInit {
  constructor(
    private router: Router,
    private productService: ProductService) { }

  productGroups: ProductGroup[];

  ngOnInit() {
    this.productGroups = this.productService.getProductGroups();
  }

  onEdit(item: ProductGroup) {
    this.router.navigate(['/product-group-detail', item.id]);
  }

  onAdd() {
    this.router.navigate(['/product-group-detail', -1]);
  }

  onDelete(item: ProductGroup) {
    let result = this.productService.deleteProductGroup(item.id);
    // check result

    // reload
    this.ngOnInit();
  }

}