const MAX_ROW = 20;

export class PaginationInfo {
    current: number;
    total: number;
    constructor(totalRow: number) {
        this.setTotalRow(totalRow);
    }

    getMaxRow(): number {
        return MAX_ROW;
    }
    setTotalRow(totalRow: number) {
        let totalPage = totalRow/MAX_ROW;
        if (totalRow % MAX_ROW != 0) {
            totalPage += 1;
        }

        this.current = 1;
        this.total = totalPage;
    }

    update(current:number, totalRow: number) {
        let totalPage = totalRow/MAX_ROW;
        if (totalRow % MAX_ROW == 0) {
            totalPage += 1;
        }

        if (current < 1) {
            current = 1;
        } else if (current > totalPage) {
            current = totalPage;
        }

        this.current = current;
        this.total = totalPage;
    }
}