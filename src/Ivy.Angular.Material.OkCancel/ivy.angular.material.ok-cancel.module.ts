'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';
import { MatIconModule, MatButtonModule } from '@angular/material';

import { MaterialOkCancelComponent } from './src/Components/OkCancel/ok-cancel.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

// Service Collection
let imports: any[] = [
    CommonModule,

    MatButtonModule,
    MatIconModule,

    FlexLayoutModule
];

let providers: any[] = [
];

let declarations: any[] = [
    MaterialOkCancelComponent
];

// NgModule
@NgModule({
    imports: imports,
    providers: providers,
    declarations: declarations,
    exports: declarations
})
export class IvyAngularMaterialOkCancelModule {
}