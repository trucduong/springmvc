import { GridDataItem } from './grid.data.item';

export class GridDataList {
    headers: string[];
    items: GridDataItem[];

    constructor(headers: string[], items: GridDataItem[]) {
        this.headers = headers;
        this.items = items;
    }
}