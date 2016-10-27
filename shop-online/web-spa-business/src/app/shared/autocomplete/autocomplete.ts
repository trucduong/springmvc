import { Component, OnInit, OnChanges, SimpleChange, 
    Input, Output,EventEmitter } from '@angular/core';
import { GridInfo} from '../grid/grid.info';



@Component({
    selector: 'autocomplete-cmp',
    templateUrl: 'src/app/shared/autocomplete/autocomplete.html',
    styleUrls: ['src/app/shared/autocomplete/autocomplete.css']
})
export class AutoCompleteCmp {
    private searchText: string;
    @Input('info') info: GridInfo;
    @Input('data-source') dataSources: string[];

    @Output('onExecute') onExecute = new EventEmitter<any>();

    onKey(){
        this.onExecute.emit(this.searchText);
    }



}


 