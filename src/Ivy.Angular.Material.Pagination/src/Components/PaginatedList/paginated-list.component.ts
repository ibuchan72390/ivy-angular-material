import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { PaginatedRequest, BasePaginatedResponse } from 'ivy.angular.data';

@Component({
    selector: 'ivy-paginated-list',

    // Fully qualified path required for karma-typescript
    templateUrl: './paginated-list.component.html',
    styles: [
        `
.page-count-bar {
    
    height: 40px;
    font-size: 16px;
}

.page-count-text {
    font-size: 16px;
}

`
    ]
})
export class PaginatedListComponent implements OnInit {

    pageCounts: number[] = [5, 10, 25, 50, 100];

    request: PaginatedRequest;
    pageCountCache: number = 1;

    requestInit: boolean = false;

    /*
     * Any time the pagination request changes, we'll simply return the new value to a higher context.
     * The higher context will then be capable of taking the new request and firing it off to the server.
     * This ensures this component is responsible for setting up the PaginatedRequest and rending can
     * still be appropriately handled in a higher context.
     *
     * We will emit data on....
     * 1) Change page
     * 2) Change page size
     * 3) Hit search button
     */
    @Output() onPaginationChange: EventEmitter<PaginatedRequest> = new EventEmitter<PaginatedRequest>();

    @Input() response: BasePaginatedResponse;
    @Input() hideSearch: boolean;

    @Input() pageCountText: string;
    @Input() searchText: string;
    @Input() noDataText: string;
    
    constructor() {

        this.request = new PaginatedRequest();
    }

    ngOnInit() {
        this.refreshPagination();
    }

    refreshPagination(): void {

        // Let's reset the spinner motion
        this.response = null;

        this.onPaginationChange.emit(this.request);
    }

    refreshTotalPages(): void {

        let newTotalPages = this.getTotalPages();

        if (newTotalPages < this.request.pageNumber) {
            this.request.pageNumber = newTotalPages;
        }

        this.refreshPagination();
    }

    getTotalPages(): number {
        if (this.response != null) {
            let totalPages = this.response.totalCount / this.request.pageCount;
            let roundedPages = Math.floor(totalPages);

            /*
             * do we need to round down here and add one ???
             * what if we are at the exact final page length ???
             */

            if (totalPages == 0) {
                return this.setCachedPagesAndReturn(1);
            } else if (totalPages == roundedPages) {
                return this.setCachedPagesAndReturn(roundedPages);
            } else {
                return this.setCachedPagesAndReturn(roundedPages + 1);
            }
        }

        return this.pageCountCache;
    }

    showNoData(): boolean {
        if (this.response == null) return false;
        if (this.response.totalCount == 0) return true;

        return false;
    }

    nextPage(): void {

        if (this.canMoveNext()) {
            this.request.pageNumber++;
            this.refreshPagination();
        }
    }

    previousPage(): void {

        if (this.canMovePrevious()) {
            this.request.pageNumber--;
            this.refreshPagination();
        }
    }

    canMoveNext(): boolean {
        let totalPages = this.getTotalPages();
        return this.request.pageNumber < totalPages;
    }

    canMovePrevious(): boolean {
        return this.request.pageNumber > 1;
    }

    getGtXsToolbarAlignment(): string {
        if (this.hideSearch) {
            return 'center';
        } else {
            return 'start';
        }
    }

    private setCachedPagesAndReturn(cacheNum: number): number {

        this.pageCountCache = cacheNum;
        return cacheNum;
    }
}