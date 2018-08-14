import { Injectable } from '@angular/core';

import { PaginatedRequest } from 'ivy.angular.data';

@Injectable()
export class PaginationHelperService {

    getIndex(index: number, req: PaginatedRequest): number {
        
        // Subtract one from pageNumber because page Zero starts with #1
        let baseCount = req.pageCount * (req.pageNumber - 1);

        // Add one for zero-based indexing
        return baseCount + index + 1; 
    }
}