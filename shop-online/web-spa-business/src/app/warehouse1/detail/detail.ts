import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Warehouse } from '../shared/index';
import { WarehouseService} from '../shared/index';

@Component({
  selector: 'warehouse-detail',
  templateUrl: 'src/app/warehouse/detail/detail.html'
})

export class WarehouseDetailCmp implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private warehouseService: WarehouseService) { }

  model: Warehouse;
  isEditing: Boolean;
  error: String;

   ngOnInit() {
    // Set default variables
    this.error = null;

    this.route.params.forEach((params: Params) => {
        let id = params['id'] + '';
        if (id == null || id == '' || id == '-1') {
            this.model = new Warehouse('-1', '', '','','','','');
            this.isEditing = false;
        } else {
            this.model = this.warehouseService.getWarehouse(id);
            this.isEditing = true;
        }
    });
  }

  onSave() {
      // validate
      
      // save
      let result = this.warehouseService.saveWarehouse(this.model, this.isEditing);

      if (result) {
          this.onBack();
      } else {
          this.error = "Can not save!";
      }
  }

  onBack() {
      this.router.navigate(['warehouse']);
  }


}