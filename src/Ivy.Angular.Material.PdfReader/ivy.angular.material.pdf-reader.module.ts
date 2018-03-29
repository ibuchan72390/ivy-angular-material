'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

import { MatSlideToggleModule, MatIconModule, MatInputModule, MatProgressSpinnerModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';

import { MaterialPdfReaderComponent } from './src/Components/PdfReader/pdf-reader.component';


// Service Collection
let imports: any[] = [

    CommonModule,
    FormsModule,

    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,

    FlexLayoutModule,

    PdfViewerModule
];

let providers: any[] = [
];

let declarations: any[] = [
    MaterialPdfReaderComponent
];

// NgModule
@NgModule({
    imports: imports,
    providers: providers,
    declarations: declarations,
    exports: declarations
})
export class IvyAngularMaterialPdfReaderModule {
}