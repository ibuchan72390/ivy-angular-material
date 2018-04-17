'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FlexLayoutModule, FlexFillDirective, LayoutDirective, LayoutAlignDirective } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';

import { MaterialNotFoundComponent } from './src/Components/NotFound/not-found.component';

// Service Collection
let imports: any[] = [
    CommonModule,
    FlexLayoutModule,
    MatIconModule
];

let providers: any[] = [
];

let declarations: any[] = [
    MaterialNotFoundComponent
];

// NgModule
@NgModule({
    imports: imports,
    providers: providers,
    declarations: declarations,
    exports: declarations
})
export class IvyAngularMaterialNotFoundModule {
}