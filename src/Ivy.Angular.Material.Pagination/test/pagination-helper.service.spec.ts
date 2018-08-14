import 'jasmine';

import { TestBed } from '@angular/core/testing';

import { IvyAngularMaterialPaginationModule } from '../ivy.angular.material.pagination.module';

import { PaginationHelperService } from '../src/Services/pagination-helper.service';

import { PaginatedRequest } from 'ivy.angular.data';

describe('PaginationHelperService', () => {

    let sut: PaginationHelperService;


    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialPaginationModule
            ]
        });

        sut = TestBed.get(PaginationHelperService);
    });


    describe('getIndex', () => { 

        it('getIndex returns as expected for first item', () => {

            var req = new PaginatedRequest();

            req.pageCount = 10;
            req.pageNumber = 1;

            var result = sut.getIndex(0, req);

            expect(result).toBe(1);
        });

        it('getIndex returns as expected for first item of next page', () => {

            var req = new PaginatedRequest();

            req.pageCount = 10;
            req.pageNumber = 2;

            var result = sut.getIndex(0, req);

            expect(result).toBe(11);
        });

        it('getIndex returns as expected for tenth item', () => {

            var req = new PaginatedRequest();

            req.pageCount = 10;
            req.pageNumber = 1;

            var result = sut.getIndex(10, req);

            expect(result).toBe(11);
        });

        it('getIndex returns as expected for tenth item of next page', () => {

            var req = new PaginatedRequest();

            req.pageCount = 10;
            req.pageNumber = 2;

            var result = sut.getIndex(10, req);

            expect(result).toBe(21);
        });
    });
});