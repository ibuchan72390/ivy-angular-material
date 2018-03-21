import 'jasmine';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { configureWebTests } from 'ivy.angular.test-helpers';

import { LoadingSpinnerComponent } from '../src/Components/LoadingSpinner/loading-spinner.component';

describe('LoadingSpinnerComponent', () => {

    // Variables & Constants
    let fixture: ComponentFixture<LoadingSpinnerComponent>;
    let sut: LoadingSpinnerComponent;


    // SetUp & TearDown - TESTING
    beforeEach(async () => {

        const configureTestBed: (tb: TestBed) => void =
            (tb: TestBed) => {
                tb.configureTestingModule({
                    imports: [
                        CommonModule,
                        FlexLayoutModule,
                        MatProgressSpinnerModule
                    ],
                    declarations: [
                        LoadingSpinnerComponent
                    ],
                });
            };

        await configureWebTests(configureTestBed);

        fixture = TestBed.createComponent(LoadingSpinnerComponent);
        sut = fixture.componentInstance;
    });



    // Tests
    it('spinner can be seen if loading is true', () => {

        sut.isLoading = true;

        fixture.detectChanges();

        let elem = fixture.debugElement.nativeElement;
        let spinner = elem.querySelector('mat-spinner');

        expect(spinner).not.toBe(undefined);
        expect(spinner).not.toBe(null);
    });

    it('spinner is not visible if loading is false', () => {

        sut.isLoading = false;

        fixture.detectChanges();

        let elem = fixture.debugElement.nativeElement;
        let spinner = elem.querySelector('mat-spinner');

        expect(spinner).toBe(null);
    });

});