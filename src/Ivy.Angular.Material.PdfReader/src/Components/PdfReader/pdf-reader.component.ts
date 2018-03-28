declare var require: any;

import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PDFDocumentProxy } from 'ng2-pdf-viewer';

@Component({
    selector: 'ivy-material-pdf-reader',
    templateUrl: './pdf-reader.component.html',
    styles: [`


.image-border {
    border: 3px solid gray;
}

.image-auto-size {
    width: 98%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
}


`]
})
export class MaterialPdfReaderComponent {

    isLoading: boolean = true;
    showAll: boolean = false;

    totalPages: number = 1;
    currentPage: number = 1;

    @Input() pageText: string;
    @Input() showAllPagesText: string;
    @Input() previousPageText: string;
    @Input() nextPageText: string;

    @Input() src: string;
    @Output() onLoadComplete: EventEmitter<PDFDocumentProxy> = new EventEmitter<PDFDocumentProxy>();


    afterLoadComplete(pdf: PDFDocumentProxy) {
        this.totalPages = pdf.numPages;
        this.onLoadComplete.emit(pdf);
        this.isLoading = false;
    }

    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
        }
    }

    onPageInputChange() {
        if (this.currentPage > this.totalPages) {
            this.currentPage = this.totalPages;
        } else if (this.currentPage < 0) {
            this.currentPage = 1;
        }
    }

    previousPage() {
        if (this.currentPage - 1 > 0) {
            this.currentPage--;
        }
    }

    logErr(event: any): void {
        console.log(event);
    }
}