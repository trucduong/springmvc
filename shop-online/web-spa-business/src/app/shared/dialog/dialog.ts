import {Component} from '@angular/core';
import {DialogService} from './dialog.service';

@Component({
  selector:'dialog-cmp',
  templateUrl:'src/app/shared/filter/filter.html'
})
export class DialogCmp {
  constructor(private dialogService: DialogService) {}
  confirm() {
    this.dialogService.dialogConfirmation();
  }
  reject() {
    this.dialogService.dialogRejection();
  }
}