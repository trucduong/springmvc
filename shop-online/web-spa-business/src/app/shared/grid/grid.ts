import { Component, OnChanges, SimpleChange, 
    Input, Output, EventEmitter, ViewChild } from '@angular/core';


import { PaginationInfo } from '../index';
import { FilterCmp } from '../filter/filter';

@Component({
    selector: 'grid-cmp',
    templateUrl: 'src/app/shared/grid/grid.html'
})
export class GridCmp implements OnChanges {
    @Input('data-list') dataList: any[];
    @Output('onReload') onReload = new EventEmitter();
    @Output('onFilter') onFilter = new EventEmitter<string>();
    @Output('onShow') onShow = new EventEmitter<any[]>();

    @ViewChild(FilterCmp)
    private filterCmp: FilterCmp;
    
    paginationInfo: PaginationInfo;
    

    constructor() { }
    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        if (this.dataList) {
            let rows = this.dataList.length;
            this.paginationInfo = new PaginationInfo(rows);
            this.onPaging(this.paginationInfo.current);
        }
    }

    onFilterChanged(value: string) {
        this.onFilter.emit(value);
    }

    onPaging(index: number) {
        // Reload
        if (index == 0) {
            this.filterCmp.clear();
            this.onReload.emit();
            return;
        }

        // Paging
        this.paginationInfo.setCurrent(index);
        let start = (this.paginationInfo.current - 1) * this.paginationInfo.getMaxRow();
        let end = start + this.paginationInfo.getMaxRow();
        if (end > this.dataList.length) {
            end = this.dataList.length;
        }

        if (start < end) {
            this.onShow.emit(this.dataList.slice(start, end));
        } else {
            this.onShow.emit([]);
        }
    }
}