import { Router, ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import {TranslateService} from 'ng2-translate/ng2-translate';

import { GridHeader, GridInfo, SortInfo, FilterInfo } from '../../shared/index';
import { BaseController } from './base.controller';
import { AlertType } from '../alert/alert.type';

/**
 * ListController
 */
export abstract class ListController<T> extends BaseController {
    constructor(
        private route: ActivatedRoute,
        translate: TranslateService,
        router: Router) {

        super(router, translate);
    }

    idColumnName='id';
    private gridInfo: GridInfo;
    private dataSource: T[]; 
    private errors: { [key: string]: string; } = {};

    abstract load(): T[];
    abstract getDetailUrl(): string;
    abstract delete(id: T): boolean;
    abstract getHeaders(): GridHeader[];

    getDefaultSort(): SortInfo {
        return null;
    }
    
    getDefaultFilter(): FilterInfo {
        return null;
    }


    ngOnInit() {
        this.showLoading();

        this.errors = {};

        this.gridInfo = new GridInfo(this.getHeaders(), this.getDefaultSort(), this.getDefaultFilter())
        this.onLoad();

        this.hideLoading();
    }

    onLoad() {
        this.dataSource = this.load();
        if (!this.dataSource) {
            this.dataSource = [];
        }
    }

    onEdit(item: T) {
        this.navigateTo([this.getDetailUrl(), item[this.idColumnName]]);
    }

    onAdd() {
        this.navigateTo([this.getDetailUrl(), '-1']);
    }

    onDelete(item: T) {
        // TODO: show confirm message

        // delete
        let result = this.delete(item);

        // check result
        if (result) {
            this.alert(AlertType.success, 'Delete success!');
            this.onLoad();
        } else {
            this.alert(AlertType.danger, 'Delete failure!');
        }
    }
}