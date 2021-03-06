import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { WarehouseService, Input } from '../../shared/index';

@Component({
  selector: 'warehouse-input-detail',
  templateUrl: 'src/app/warehouse/input/detail/detail.html'
})

export class WarehouseInputDetailCmp implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private warehouseService: WarehouseService) { }

  model: Input;
  isEditing: Boolean;
  error: String;

  ngOnInit() {
    // Set default variables
    this.error = null;

    this.route.params.forEach((params: Params) => {
        let id = params['id'] + '';
        if (id == null || id == '' || id == '-1') {
            this.model = new Input('-1', '', '','','','','','','');
            this.isEditing = false;
        } else {
            this.model = this.warehouseService.getInput(id);
            this.isEditing = true;
        }
    });
  }

  onSave() {
      // validate
      
      // save
      let result = this.warehouseService.saveInput(this.model, this.isEditing);

      if (result) {
          this.onBack();
      } else {
          this.error = "Can not save!";
      }
  }

  onBack() {
      this.router.navigate(['warehouse-input']);
  }
}