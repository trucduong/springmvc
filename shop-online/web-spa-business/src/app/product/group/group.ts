import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {TranslateService} from 'ng2-translate/ng2-translate';

import { ListController, GridHeader, SortInfo, FilterInfo } from '../../shared/index';
import { ProductService, ProductGroup } from '../shared/index';

const headers: GridHeader[] = [
  { name: 'id', labelKey: 'product.group.list.id', sortable: true, width: 20 },
  { name: 'name', labelKey: 'product.group.list.name', sortable: true, width: 30 },
  { name: 'status', labelKey: 'common.list.status', sortable: true, width: 20 },
  { name: 'note', labelKey: 'common.list.note', sortable: true, width: 30 },

];

@Component({
  selector: 'product-group',
  templateUrl: 'src/app/product/group/group.html'
})
export class ProductGroupCmp extends ListController<ProductGroup> implements OnInit {
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
    return new FilterInfo(['name', 'note']);
  }

  load(): ProductGroup[] {
    return this.productService.getProductGroups();
  }

  getCurrentUrl(): string {
    return '/product-group';
  }

  getDetailUrl(): string {
    return '/product-group-detail';
  }

  delete(item: ProductGroup): boolean {
    return this.productService.deleteProductGroup(item.id);
  }
}