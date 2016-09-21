import { Router, ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import {TranslateService} from 'ng2-translate/ng2-translate';

import { BaseController } from '../../shared/index';
import { AlertType } from '../../shared/index';

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

    private allItems: T[];
    private items: T[];
    private errors: { [key: string]: string; } = {};;

    abstract load(): T[];
    abstract filter(value: string): T[];
    abstract getDetailUrl(): string;
    abstract delete(item: T): boolean;

    ngOnInit() {
        this.showLoading();

        this.errors = {};
        this.onLoad();

        this.hideLoading();
    }

    onEdit(item: T) {
        this.navigateTo([this.getDetailUrl(), item['id']] );
    }

    onAdd() {
        this.navigateTo([this.getDetailUrl(), -1]);
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

    onShow(items: any[]) {
        this.items = items;
    }

    onLoad() {
        this.allItems = this.load();
    }

    onFilter(value: string) {
        if (value) {
            this.allItems = this.filter(value);
        } else {
            this.onLoad();
        }
    }
}