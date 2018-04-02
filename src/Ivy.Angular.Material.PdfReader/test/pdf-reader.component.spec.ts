import 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IvyAngularMaterialPdfReaderModule } from '../ivy.angular.material.pdf-reader.module';

import { MaterialPdfReaderComponent } from '../src/Components/PdfReader/pdf-reader.component';

import { PDFDocumentProxy } from 'ng2-pdf-viewer';

describe('MaterialPdfReaderComponent', () => {

    // Variables
    let fixture: ComponentFixture<MaterialPdfReaderComponent>;
    let sut: MaterialPdfReaderComponent;

    const pdfLink = 'http://www.orimi.com/pdf-test';
    const pdfSrc = pdfLink + '.pdf';

    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialPdfReaderModule,
                BrowserAnimationsModule
            ]
        });

        fixture = TestBed.createComponent(MaterialPdfReaderComponent);
        sut = fixture.componentInstance;
    });


    // Init
    it('MaterialPdfReaderComponent sets src on the pdf-viewer', () => {

        sut.src = pdfSrc;

        fixture.detectChanges();

        let pdfElem = fixture.debugElement.nativeElement.querySelector('pdf-viewer');

        let containsSrc = pdfElem.outerHTML.indexOf(pdfLink) > -1;

        expect(containsSrc).toBeTruthy();
    });

    it('MaterialPdfReaderComponent sets texts in the correct places', () => {

        sut.showAllPagesText = 'Show All';
        sut.previousPageText = 'Previous';
        sut.nextPageText = 'Next';
        sut.pageText = 'Page';

        // Need to end loading so the upper piece can initialize
        sut.isLoading = false;

        fixture.detectChanges();

        // Validate showAllPages
        let slideToggle = fixture.debugElement.nativeElement.querySelector('mat-slide-toggle');
        expect(slideToggle.innerText.trim()).toBe(sut.showAllPagesText);

        // Validate previousPage
        let prevButton = fixture.debugElement.nativeElement.querySelector('#prevButton').querySelector('span');
        let prevContains = prevButton.innerText.indexOf(sut.previousPageText) > -1;
        expect(prevContains).toBeTruthy();

        // Validate nextPage
        let nextButton = fixture.debugElement.nativeElement.querySelector('#nextButton').querySelector('span');
        let nextContains = nextButton.innerText.indexOf(sut.nextPageText) > -1;
        expect(nextContains).toBeTruthy();

        // Validate Page
        let pageInput = fixture.debugElement.nativeElement.querySelector('mat-form-field').querySelector('input');
        expect(pageInput.placeholder).toBe(sut.pageText);
    });

    //// AfterLoadComplete
    it('MaterialPdfReaderComponent sets totalPages, isLoading false, and emits complete when pdf load is complete', () => {

        let result: PDFDocumentProxy = null;
        sut.onLoadComplete.subscribe((emit: PDFDocumentProxy) => result = emit);

        expect(sut.totalPages).toBe(1);
        expect(sut.isLoading).toBe(true);

        fixture.detectChanges();

        let pdfViewer = fixture.debugElement.nativeElement.querySelector('pdf-viewer');

        //let event = new CustomEvent('after-load-complete', { detail: { numPages: 10 } });
        let event = new Event('after-load-complete');

        // THIS IS HOW YOU MAKE CUSTOM EVENT ATTRS
        let anyEvent = event as any;
        anyEvent.numPages = 10;

        pdfViewer.dispatchEvent(anyEvent);

        expect(sut.isLoading).toBe(false);
        expect(sut.totalPages).toBe(anyEvent.numPages);
        expect(result).toBe(anyEvent);
    });

    //// NextPage
    it('MaterialPdfReaderComponent increases page on nextPage if currentPage is beow totalPages', () => {

        const startPage: number = 1;

        sut.currentPage = startPage;
        sut.totalPages = 10;

        expect(sut.currentPage < sut.totalPages).toBeTruthy();

        sut.nextPage();

        expect(sut.currentPage).toBe(startPage + 1);
    });

    it('MaterialPdfReaderComponent does nothing on next page if currentPage equals totalPages', () => {

        const startPage: number = 10;

        sut.currentPage = startPage;
        sut.totalPages = 10;

        expect(sut.currentPage >= sut.totalPages).toBeTruthy();

        sut.nextPage();

        expect(sut.currentPage).toBe(startPage);
    });

    //// onPageInputChange
    it('onPageInputChange sets currentPage equal to totalPages if currentPage > totalPages', () => {

        sut.totalPages = 10;
        sut.currentPage = sut.totalPages + 10;

        expect(sut.currentPage > sut.totalPages).toBeTruthy();

        sut.onPageInputChange();

        expect(sut.currentPage).toBe(sut.totalPages);
    });

    it('onPageInputChange sets currentPage equal to 1 if currentPage < 0', () => {

        sut.currentPage = -20;

        expect(sut.currentPage <= 0).toBeTruthy();

        sut.onPageInputChange();

        expect(sut.currentPage).toBe(1);
    });

    it('onPageInputChange does nothing if current page between 0 and totalPages', () => {

        const startPage: number = 5;

        sut.currentPage = startPage;
        sut.totalPages = 10;

        expect(sut.currentPage < sut.totalPages).toBeTruthy();
        expect(sut.currentPage > 0).toBeTruthy();

        sut.onPageInputChange();

        expect(sut.currentPage).toBe(startPage);
    });

    //// previousPage
    it('MaterialPdfReaderComponent decreases page on previousPage if currentPage is greater than 0', () => {

        const startPage: number = 10;

        sut.currentPage = startPage;

        expect(sut.currentPage > 0).toBeTruthy();

        sut.previousPage();

        expect(sut.currentPage).toBe(startPage - 1);
    });

    it('MaterialPdfReaderComponent does nothing on previousPage if currentPage equals 0', () => {

        sut.currentPage = 0;

        expect(sut.currentPage <= 0).toBeTruthy();

        sut.previousPage();

        expect(sut.currentPage).toBe(0);
    });
});