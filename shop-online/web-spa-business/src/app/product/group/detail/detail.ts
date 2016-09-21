import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductService, ProductGroup } from '../../shared/index';

@Component({
  selector: 'product-group-detail',
  templateUrl: 'src/app/product/group/detail/detail.html'
})

export class ProductGroupDetailCmp implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  model: ProductGroup;
  isEditing: Boolean;
  error: String;

  ngOnInit() {
    // Set default variables
    this.error = null;

    this.route.params.forEach((params: Params) => {
        let id = params['id'] + '';
        if (id == null || id == '' || id == '-1') {
            this.model = new ProductGroup('-1', '', '','');
            this.isEditing = false;
        } else {
            this.model = this.productService.getProductGroup(id);
            this.isEditing = true;
        }
    });
  }

  onSave() {
      // validate
      
      // save
      let result = this.productService.saveProductGroup(this.model, this.isEditing);

      if (result) {
          this.onBack();
      } else {
          this.error = "Can not save!";
      }
  }

  onBack() {
      this.router.navigate(['product-group']);
  }
}