import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material';

import { LoadingSpinnerComponent } from './src/Components/LoadingSpinner/loading-spinner.component';

// Service Collection
let declarations: any[] = [
    LoadingSpinnerComponent
];


// NgModule
@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatProgressSpinnerModule
    ],
    declarations: declarations,
    exports: declarations
})
export class IvyAngularMaterialLoadingSpinnerModule {
}