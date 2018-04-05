import { NgModule } from '@angular/core';

import { MatIconModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialFileUploaderComponent } from './src/Components/FileUploader/file-uploader.component';

// Service Collection
let declarations: any[] = [
    MaterialFileUploaderComponent
];


// NgModule
@NgModule({
    imports: [
        MatIconModule,
        MatInputModule,
        FlexLayoutModule
    ],
    declarations: declarations,
    exports: declarations
})
export class IvyAngularMaterialFileUploaderModule {
}