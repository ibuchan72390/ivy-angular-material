'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

import { FileReaderService } from './src/Services/file-reader.service';

// Service Collection
let imports: any[] = [
];

let providers: any[] = [
    FileReaderService
];

let declarations: any[] = [

];

// NgModule
@NgModule({
    imports: imports,
    providers: providers,
    declarations: declarations,
    exports: declarations
})
export class IvyAngularFileReaderModule {
}