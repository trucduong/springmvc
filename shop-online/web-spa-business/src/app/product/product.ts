import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {TranslateService} from 'ng2-translate/ng2-translate';

import { ListController, GridHeader, SortInfo, FilterInfo } from './../shared/index';
import { Product } from './shared/index';
import { ProductService} from './shared/index';

const headers: GridHeader[] = [
  { name: 'id', labelKey: 'product.list.id', sortable: true, width: 5 },
  { name: 'name', labelKey: 'product.list.name', sortable: true, width: 10 },
  { name: 'unit', labelKey: 'common.list.birthDay', sortable: true, width: 10 },
  { name: 'inputPrice', labelKey: 'product.list.inputPrice', sortable: true, width: 10 },
  { name: 'wholesalePrice', labelKey: 'product.list.wholesalePrice', sortable: true, width: 10 },
  { name: 'retailPrice', labelKey: 'product.list.retailPrice', sortable: true, width: 10 },
   { name: 'productGroup', labelKey: 'product.list.productGroup', sortable: true, width: 10 },
  { name: 'alarmInventory', labelKey: 'product.list.alarmInventory', sortable: true, width: 10 },
  { name: 'status', labelKey: 'common.list.status', sortable: true, width: 5 },
    { name: 'note', labelKey: 'common.list.note', sortable: true, width: 10 }

];

@Component({
  selector: 'product',
  templateUrl: 'src/app/product/product.html'
})

export class ProductCmp extends ListController<Product> implements OnInit  {
    constructor(
    route: ActivatedRoute,
    router: Router,
    translate: TranslateService,
    private productService: ProductService) {

      super(route, translate, router);
    }

  getHeaders(): GridHeader[] {
    return headers;
  }

  getDefaultSort(): SortInfo {
    return new SortInfo('name', 'asc');
  }

  getDefaultFilter(): FilterInfo {
    return new FilterInfo(['id','name', 'productGroup','note']);
  }

  load(): Product[] {
    return this.productService.getProducts();
  }

  getCurrentUrl(): string {
    return '/product';
  }

  getDetailUrl(): string {
    return '/product-detail';
  }

  delete(item: Product): boolean {
    return this.productService.deleteProduct(item.id);
  }

}