import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Product } from './shared/index';
import { ProductService} from './shared/index';


@Component({
  selector: 'product',
  templateUrl: 'src/app/product/product.html'
})

export class ProductCmp implements OnInit  {
  constructor(
    private router: Router,
    private productService: ProductService) { }

  products: Product[];


  ngOnInit() {
    this.products = this.productService.getProducts();
  }

   onEdit(item: Product) {
    this.router.navigate(['/product-detail', item.code]);
  }

   onAdd() {
    this.router.navigate(['/product-detail', -1]);
  }

  onDelete(item: Product) {
    let result = this.productService.deleteProduct(item.code);
    // check result

    // reload
    this.ngOnInit();
    
}

}