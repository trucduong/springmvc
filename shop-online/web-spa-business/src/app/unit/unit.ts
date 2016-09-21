import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Unit } from './shared/index';
import { UnitService} from './shared/index';


@Component({
  selector: 'unit',
  templateUrl: 'src/app/unit/unit.html'
})

export class UnitCmp implements OnInit  {
  constructor(
    private router: Router,
    private unitService: UnitService) { }

  units: Unit[];


  ngOnInit() {
    this.units = this.unitService.getUnits();
  }

   onEdit(item: Unit) {
    this.router.navigate(['/unit-detail', item.id]);
  }

   onAdd() {
    this.router.navigate(['/unit-detail', -1]);
  }

  onDelete(item: Unit) {
    let result = this.unitService.deleteUnit(item.id);
    // check result

    // reload
    this.ngOnInit();
    
}

}