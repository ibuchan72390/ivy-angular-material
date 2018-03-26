import { NgModule } from '@angular/core';

import { MatIconModule, MatInputModule } from '@angular/material';

import { FileUploaderComponent } from './src/Components/FileUploader/file-uploader.component';

// Service Collection
let declarations: any[] = [
    FileUploaderComponent
];


// NgModule
@NgModule({
    imports: [
        MatIconModule,
        MatInputModule
    ],
    declarations: declarations,
    exports: declarations
})
export class IvyAngularMaterialFileUploaderModule {
}