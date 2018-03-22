import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from './src/Components/LoadingSpinner/loading-spinner.component';

// Service Collection
let declarations: any[] = [
    LoadingSpinnerComponent
];


// NgModule
@NgModule({
    imports: [CommonModule],
    declarations: declarations,
    exports: declarations
})
export class IvyAngularMaterialLoadingSpinnerModule {
}