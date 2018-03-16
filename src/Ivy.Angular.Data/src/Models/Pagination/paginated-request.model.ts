export class PaginatedRequest {

    constructor() {
        this.pageCount = 10;
        this.pageNumber = 1;
        this.search = null;
    }

    pageCount: number;
    pageNumber: number;
    search: string;
}