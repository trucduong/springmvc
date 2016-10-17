import { Router, ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import {TranslateService} from 'ng2-translate/ng2-translate';

import { GridHeader, GridAction, GridInfo, SortInfo, FilterInfo } from '../../shared/index';
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
    abstract getHeaders(): GridHeader[];

    getActions(): GridAction[] {
        let actions: GridAction[] = [
            {name:'edit', type:'btn-warning', icon:'fa fa-pencil'},
            {name:'delete', type:'btn-danger', icon:'fa fa-times'},
        ];
        return actions;
    }

    getDefaultSort(): SortInfo {
        return null;
    }
    
    getDefaultFilter(): FilterInfo {
        return new FilterInfo([]);
    }


    ngOnInit() {
        this.showLoading();

        this.errors = {};

        this.gridInfo = new GridInfo(this.getHeaders(), this.getActions(), this.getDefaultSort(), this.getDefaultFilter())
        this.onLoad();

        this.hideLoading();
    }

    onExecute(param: any) {
        if(!param.action) {
            return;
        }

        if (param.action == 'load') {
            this.onLoad();

        } else if (param.action == 'edit') {
            this.onEdit(param.data);

        } else if (param.action == 'delete') {
            this.onDelete(param.data);
            
        } else if (param.action == 'select') {
            this.onSelect(param.data);

        } else {
            this.execute(param);
        }
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

    onSelect(item: T) {
        //alert('select: ' + item[this.idColumnName]);
    }

    execute(param: any) { }

    delete(id: T): boolean{
        return true;
    }
}