'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule, MatIcon } from '@angular/material';

import { MaterialStarRatingComponent } from './src/Components/StarRating/star-rating.component';

// Service Collection
let imports: any[] = [
    CommonModule,
    MatIconModule
];

let providers: any[] = [
];

let declarations: any[] = [
    MaterialStarRatingComponent
];

// NgModule
@NgModule({
    imports: imports,
    providers: providers,
    declarations: declarations,
    exports: declarations
})
export class IvyAngularMaterialStarRatingModule {
}