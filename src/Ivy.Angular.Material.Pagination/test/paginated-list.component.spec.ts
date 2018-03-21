import 'jasmine';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatSelectModule, MatOptionModule, MatInputModule, MatIconModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { configureWebTests } from 'ivy.angular.test-helpers';

import { PaginatedRequest } from 'ivy.angular.data';

import { PaginatedListComponent } from '../src/Components/PaginatedList/paginated-list.component';


describe('PaginatedListComponent', () => {

    // Variables & Constants
    let fixture: ComponentFixture<PaginatedListComponent>;
    let sut: PaginatedListComponent;


    // SetUp
    beforeEach(async () => {

        const configureTestBed: (tb: TestBed) => void =
            (tb: TestBed) => {
                tb.configureTestingModule({
                    imports: [
                        CommonModule,
                        FormsModule,

                        MatSelectModule,
                        MatOptionModule,
                        MatInputModule,
                        MatIconModule,
                        MatToolbarModule,
                        MatCardModule,

                        FlexLayoutModule
                    ],
                    declarations: [
                        PaginatedListComponent
                    ],
                });
            };

        await configureWebTests(configureTestBed);

        fixture = TestBed.createComponent(PaginatedListComponent);
        sut = fixture.componentInstance;
    });


    // canMoveNext
    

    // canMovePrevious
    it('canMovePrevious returns true if request.pageNumber > 1', () => {

        let req = new PaginatedRequest();

        req.pageNumber = 10;
        sut.request = req;

        let result = sut.canMoveNext();

        expect(result).toBeFalsy();
    });

    //it('canMovePrevious returns true if request.pageNumber == 0', () => {

    //    let req = new PaginatedRequest();

    //    req.pageNumber = 0;
    //    sut.request = req;

    //    let result = sut.canMoveNext();

    //    expect(result).toBeTruthy();
    //});

});