declare var require: any

import { Component, Input } from '@angular/core';

import { DragulaService } from 'ng2-dragula/ng2-dragula';

import { SortOrder } from 'ivy.angular.data';

@Component({
    selector: 'ivy-dragging-sort-order',
    templateUrl: './dragging-sort-order.component.html',
    styles: [`

.sort-order-content:hover {
    cursor: -webkit-grab;
}

.sort-order-content:active { 
    cursor: -webkit-grabbing;
}

`]
})
export class DraggingSortOrderComponent {

    @Input()
    dragulaId: string;

    @Input()
    sortedContent: SortOrder[];

    dragulaOptions: any = {
        revertOnSpill: true,
        copy: false,
        copySortSource: true
    };

    constructor(
        dragula: DragulaService) {

        dragula.dropModel.subscribe(
            (dropModel: SortOrder) => this.refreshSortOrder()
        );
    }

    onClick(event: Event): void {
        event.preventDefault();
    }

    private refreshSortOrder(): void {

        for (var i = 0; i < this.sortedContent.length; i++) {
            this.sortedContent[i].sortOrder = i;
        }
    }
}