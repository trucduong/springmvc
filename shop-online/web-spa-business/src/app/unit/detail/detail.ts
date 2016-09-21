import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Unit } from '../shared/index';
import { UnitService} from '../shared/index';

@Component({
  selector: 'unit-detail',
  templateUrl: 'src/app/unit/detail/detail.html'
})

export class UnitDetailCmp implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private unitService: UnitService) { }

  model: Unit;
  isEditing: Boolean;
  error: String;

   ngOnInit() {
    // Set default variables
    this.error = null;

    this.route.params.forEach((params: Params) => {
        let id = params['id'] + '';
        if (id == null || id == '' || id == '-1') {
            this.model = new Unit('-1', '', '');
            this.isEditing = false;
        } else {
            this.model = this.unitService.getUnit(id);
            this.isEditing = true;
        }
    });
  }

  onSave() {
      // validate
      
      // save
      let result = this.unitService.saveUnit(this.model, this.isEditing);

      if (result) {
          this.onBack();
      } else {
          this.error = "Can not save!";
      }
  }

  onBack() {
      this.router.navigate(['unit']);
  }


}