import 'jasmine';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvyAngularMaterialPaginationModule } from '../ivy.angular.material.pagination.module';

import { PaginatedRequest, BasePaginatedResponse } from 'ivy.angular.data';

import { PaginatedListComponent } from '../src/Components/PaginatedList/paginated-list.component';


describe('PaginatedListComponent', () => {

    // Variables & Constants
    let fixture: ComponentFixture<PaginatedListComponent>;
    let sut: PaginatedListComponent;


    // SetUp
    beforeEach(async () => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialPaginationModule
            ]
        });

        fixture = TestBed.createComponent(PaginatedListComponent);
        sut = fixture.componentInstance;
    });


    // onInit
    it('onInit fires refreshPagination', () => {

        let req: PaginatedRequest = null;

        sut.response = new BasePaginatedResponse();
        sut.onPaginationChange.subscribe((pageRequest: PaginatedRequest) => req = pageRequest);

        sut.ngOnInit();

        let expectedReq = new PaginatedRequest();

        expect(sut.response).toBe(null);
        expect(req).not.toBe(null);
    });


    // refreshPagination
    it('refreshPagination nulls response and emits change', () => {

        let req: PaginatedRequest = null;

        sut.response = new BasePaginatedResponse();
        sut.onPaginationChange.subscribe((pageRequest: PaginatedRequest) => req = pageRequest);

        sut.refreshPagination();

        let expectedReq = new PaginatedRequest();

        expect(sut.response).toBe(null);
        expect(req).not.toBe(null);
    });


    //// getTotalPages
    it('getTotalPages returns 1 if response is null and never requested', () => {

        sut.response = null;

        let result = sut.getTotalPages();

        expect(result).toBe(1);
    });

    it('getTotalPages returns cache if response is null and requested prior', () => {

        const expected = 5;

        let request = new PaginatedRequest();
        request.pageCount = 10;

        let response = new BasePaginatedResponse();
        response.totalCount = request.pageCount * expected;

        sut.response = response;
        sut.request = request;

        let result = sut.getTotalPages();

        expect(result).toBe(expected);

        sut.response = null;

        result = sut.getTotalPages();

        expect(result).toBe(expected);
    });

    it('getTotalPages returns 1 if response is populated and 0 total pages', () => {

        let response = new BasePaginatedResponse();
        response.totalCount = 5;

        let request = new PaginatedRequest();
        request.pageCount = 10;

        sut.response = response;
        sut.request = request;

        let result = sut.getTotalPages();

        expect(result).toBe(1);
    });

    it('getTotalPages returns rounded totalCount / pageCount if response is populated', () => {

        const expected = 5;

        let request = new PaginatedRequest();
        request.pageCount = 10;

        let response = new BasePaginatedResponse();
        response.totalCount = request.pageCount * expected;

        sut.response = response;
        sut.request = request;

        let result = sut.getTotalPages();

        expect(result).toBe(expected);
    });


    //// showNoData
    it('showNoData returns false if response is null', () => {

        sut.response == null;

        let result = sut.showNoData();

        expect(result).toBeFalsy();
    });

    it('showNoData returns false if response.totalCount is 0', () => {

        let response = new BasePaginatedResponse();
        response.totalCount = 0;

        sut.response = response;

        let result = sut.showNoData();

        expect(result).toBeTruthy();
    });

    it('showNoData returns true if response is populated and totalCount is > 0', () => {

        let response = new BasePaginatedResponse();
        response.totalCount = 1;

        sut.response = response;

        let result = sut.showNoData();

        expect(result).toBeFalsy();
    });


    //// nextPage
    it('nextPage does nothing if not canMoveNext', () => {

        const totalPages = 5;

        let request = new PaginatedRequest();
        request.pageCount = 10;

        let response = new BasePaginatedResponse();
        response.totalCount = request.pageCount * totalPages;

        sut.response = response;
        sut.request = request;

        sut.request.pageNumber = totalPages;

        expect(sut.canMoveNext()).toBeFalsy();


        let emit: PaginatedRequest = null;
        sut.onPaginationChange.subscribe((newPage: PaginatedRequest) => emit = newPage);

        sut.nextPage();

        expect(emit).toBe(null);
    });

    it('nextPage emits request with next page if canMoveNext', () => {

        const totalPages = 5;
        const startingPage = 1;

        let request = new PaginatedRequest();
        request.pageCount = 10;
        request.pageNumber = startingPage;

        let response = new BasePaginatedResponse();
        response.totalCount = request.pageCount * totalPages;

        sut.response = response;
        sut.request = request;

        expect(sut.canMoveNext()).toBeTruthy();

        let emit: PaginatedRequest;
        sut.onPaginationChange.subscribe((newPage: PaginatedRequest) => emit = newPage);

        sut.nextPage();

        expect(emit).not.toBe(null);
        expect(emit.pageNumber).toBe(startingPage + 1);
    });


    //// previousPage
    it('previousPage does nothing if not canMovePrevious', () => {

        let req = new PaginatedRequest();

        req.pageNumber = 0;
        sut.request = req;

        let result = sut.canMovePrevious();

        expect(result).toBeFalsy();

        let emit: PaginatedRequest = null;
        sut.onPaginationChange.subscribe((newPage: PaginatedRequest) => emit = newPage);

        sut.previousPage();

        expect(emit).toBe(null);
    });

    it('previousPage emits request with previous page if canMovePrevious', () => {

        const startPage = 10;

        let req = new PaginatedRequest();

        req.pageNumber = startPage;
        sut.request = req;

        let result = sut.canMovePrevious();

        expect(result).toBeTruthy();

        let emit: PaginatedRequest = null;
        sut.onPaginationChange.subscribe((newPage: PaginatedRequest) => emit = newPage);

        sut.previousPage();

        expect(emit).not.toBe(null);
        expect(emit.pageNumber).toBe(startPage - 1);
    });


    //// canMoveNext
    it('canMoveNext returns true if current page below totalPages', () => {

        const totalPages = 5;

        let request = new PaginatedRequest();
        request.pageCount = 10;

        let response = new BasePaginatedResponse();
        response.totalCount = request.pageCount * totalPages;

        sut.response = response;
        sut.request = request;

        sut.request.pageNumber = totalPages - 1;

        let result = sut.canMoveNext();

        expect(result).toBeTruthy();
    });

    it('canMoveNext returns false if current page == totalPages', () => {

        const totalPages = 5;

        let request = new PaginatedRequest();
        request.pageCount = 10;

        let response = new BasePaginatedResponse();
        response.totalCount = request.pageCount * totalPages;

        sut.response = response;
        sut.request = request;

        sut.request.pageNumber = totalPages;

        let result = sut.canMoveNext();

        expect(result).toBeFalsy();
    });


    // canMovePrevious
    it('canMovePrevious returns true if request.pageNumber > 1', () => {

        let req = new PaginatedRequest();

        req.pageNumber = 10;
        sut.request = req;

        let result = sut.canMovePrevious();

        expect(result).toBeTruthy();
    });

    it('canMovePrevious returns false if request.pageNumber == 0', () => {

        let req = new PaginatedRequest();

        req.pageNumber = 0;
        sut.request = req;

        let result = sut.canMovePrevious();

        expect(result).toBeFalsy();
    });


    //// getGtXsToolbarAlignment
    it('getGtXsToolbarAlignment returns center if hideSearch true', () => {

        sut.hideSearch = true;

        let result = sut.getGtXsToolbarAlignment();

        expect(result).toBe('center');
    });

    it('getGtXsToolbarAlignment returns start if hideSearch false', () => {

        sut.hideSearch = false;

        let result = sut.getGtXsToolbarAlignment();

        expect(result).toBe('start');
    });

});