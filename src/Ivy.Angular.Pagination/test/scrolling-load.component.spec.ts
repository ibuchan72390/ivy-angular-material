import 'jasmine';

import { TestBed, ComponentFixture, async, getTestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import { configureWebTests } from 'ivy.angular.test-helpers';
import { PaginatedRequest, PaginatedResponse } from 'ivy.angular.data';
import { MathHelper, IvyValueHelpersModule } from 'ivy.angular.value-helpers';

import { ScrollingLoadComponent } from '../src/Components/ScrollingLoad/scrolling-load.component';

describe('ScrollingLoadComponent', () => {

    let component: ScrollingLoadComponent;
    let fixture: ComponentFixture<ScrollingLoadComponent>;

    beforeEach(done => {

        //const configure: (TestBed: TestBed) => void =
        //    (testBed: TestBed) => {

        //        testBed.configureTestingModule({
        //            imports: [
        //                IvyValueHelpersModule.forRoot()
        //            ],
        //            declarations: [
        //                ScrollingLoadComponent
        //            ],
        //        });
        //    };

        const testBed = getTestBed();

        if (testBed.platform == null) {
            testBed.initTestEnvironment(
                BrowserDynamicTestingModule,
                platformBrowserDynamicTesting());
        }

        testBed.configureCompiler({
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true },
            ]
        });

        testBed.configureTestingModule({
            imports: [
                IvyValueHelpersModule.forRoot()
            ],
            declarations: [
                ScrollingLoadComponent
            ],
            providers: [
                { provide: MathHelper, useClass: MathHelper }
            ]
        });

        testBed.compileComponents();

        fixture = testBed.createComponent(ScrollingLoadComponent);
        component = fixture.componentInstance;

        done();

        //return testBed.compileComponents()
        //    .catch(err => {
        //        console.log('Test Bed Init Err: ', err);
        //    })
        //    .then(() => {
        //        return testBed;
        //    });
    });

    // onScroll
    it('onScroll does nothing if response is null', () => {

        component.containerDiv = {
            nativeElement: {
                clientHeight: 0
            }
        };

        let event = {
            target: {
                scrollTop: 0,
                scrollHeight: 1000
            }
        };

        expect(event.target.scrollTop + component.containerDiv.nativeElement.clientHeight)
            .not.toBe(event.target.scrollHeight);

        let resultEmit: PaginatedRequest;
        component.onScrollBottom.subscribe((result: PaginatedRequest) => resultEmit = result);

        component.response = null;

        component.onScroll(event);

        expect(resultEmit).toBe(undefined);
    });

    //it('onScroll increments page if scrollTop + clientHeight == scrollHeight and response is null', () => {

    //    component.containerDiv = {
    //        nativeElement: {
    //            clientHeight: 1000
    //        }
    //    };

    //    let event = {
    //        target: {
    //            scrollTop: 0,
    //            scrollHeight: 1000
    //        }
    //    };

    //    expect(event.target.scrollTop + component.containerDiv.nativeElement.clientHeight)
    //        .toBe(event.target.scrollHeight);


    //    let resultEmit: PaginatedRequest;
    //    component.onScrollBottom.subscribe((result: PaginatedRequest) => resultEmit = result);

    //    component.response = new PaginatedResponse();

    //    // Ensure it can fire next page
    //    component.response.totalCount = 100;

    //    component.onScroll(event);

    //    expect(resultEmit).not.toBe(undefined);
    //    expect(resultEmit).not.toBe(null);
    //    expect(resultEmit.pageCount).toBe(5);  // Default in component
    //    expect(resultEmit.search).toBe(null);  // Default
    //    expect(resultEmit.pageNumber).toBe(2); // Default ++1
    //});

    //// ngOnInit
    //it('onInit sets pageCount = to 5 if no pageCount provided', () => {

    //    component.response = new PaginatedResponse();

    //    // Ensure it can fire next page
    //    component.response.totalCount = 100;

    //    let resultEmit: PaginatedRequest;
    //    component.onScrollBottom.subscribe((result: PaginatedRequest) => resultEmit = result);

    //    component.ngOnInit();

    //    expect(resultEmit.pageCount).toBe(5);  // Default in component
    //});

    //it('onInit sets pageCount = custom if countPerLoad has been provided', () => {

    //    component.response = new PaginatedResponse();

    //    // Ensure it can fire next page
    //    component.response.totalCount = 100;

    //    let resultEmit: PaginatedRequest;
    //    component.onScrollBottom.subscribe((result: PaginatedRequest) => resultEmit = result);

    //    component.countPerLoad = 123;

    //    component.ngOnInit();

    //    expect(resultEmit.pageCount).toBe(component.countPerLoad);  // Default in component
    //});

    //// afterViewChecked
    //it('afterViewChecked does nothing if response is null', () => {

    //});

    //it('afterViewChecked sets pageHeight to containerDiv clientHeight if not already set', () => { });

    //it('afterViewChecked changes page height if container div isnt equal to adjusted height', () => { });

    //// getHeight
    //it('getHeight returns 100% if maxHeight and page height are empty', () => {

    //    component.maxHeight = null;

    //    let result = component.getHeight();

    //    expect(result).toBe('100%');
    //});

    //it('getHeight returns pageHeight px if provided', () => {

    //});

    //it('getHeight returns maxHeight px if no pageHeight provided', () => {

    //});

});