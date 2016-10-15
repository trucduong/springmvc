import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { WarehouseService, Transferring } from '../../shared/index';

@Component({
  selector: 'warehouse-transferring-detail',
  templateUrl: 'src/app/warehouse/transferring/detail/detail.html'
})

export class WarehouseTransferringDetailCmp implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private warehouseService: WarehouseService) { }

  model: Transferring;
  isEditing: Boolean;
  error: String;

  ngOnInit() {
    // Set default variables
    this.error = null;

    this.route.params.forEach((params: Params) => {
        let id = params['id'] + '';
        if (id == null || id == '' || id == '-1') {
            this.model = new Transferring('-1', '', '','','','','','','');
            this.isEditing = false;
        } else {
            this.model = this.warehouseService.getTransferring(id);
            this.isEditing = true;
        }
    });
  }

  onSave() {
      // validate
      
      // save
      let result = this.warehouseService.saveTransferring(this.model, this.isEditing);

      if (result) {
          this.onBack();
      } else {
          this.error = "Can not save!";
      }
  }

  onBack() {
      this.router.navigate(['warehouse-transferring']);
  }
}