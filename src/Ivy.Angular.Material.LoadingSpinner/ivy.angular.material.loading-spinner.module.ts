import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

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

        //HttpModule,
        //HttpClientModule,

        CommonModule,
        FlexLayoutModule,
        MatProgressSpinnerModule
    ],
    declarations: declarations,
    exports: declarations
})
export class IvyAngularMaterialLoadingSpinnerModule {
}