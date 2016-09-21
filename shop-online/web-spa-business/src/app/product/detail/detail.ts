import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Product } from '../shared/index';
import { ProductService} from '../shared/index';

@Component({
  selector: 'product-detail',
  templateUrl: 'src/app/product/detail/detail.html'
})

export class ProductDetailCmp implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  model: Product;
  isEditing: Boolean;
  error: String;

   ngOnInit() {
    // Set default variables
    this.error = null;

    this.route.params.forEach((params: Params) => {
        let code = params['code'] + '';
        if (code == null || code == '' || code == '-1') {
            this.model = new Product('-1', '', '','','','','','','','','','','');
            this.isEditing = false;
        } else {
            this.model = this.productService.getProduct(code);
            this.isEditing = true;
        }
    });
  }

  onSave() {
      // validate
      
      // save
      let result = this.productService.saveProduct(this.model, this.isEditing);

      if (result) {
          this.onBack();
      } else {
          this.error = "Can not save!";
      }
  }

  onBack() {
      this.router.navigate(['product']);
  }


}