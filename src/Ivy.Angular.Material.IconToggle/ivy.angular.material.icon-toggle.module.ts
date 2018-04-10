'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

import { IvyAngularMaterialDeleteRestoreComponent } from './src/Components/DeleteRestore/delete-restore.component';
import { IvyAngularMaterialExpandCollapseComponent } from './src/Components/ExpandCollapse/expand-collapse.component';


// Service Collection
let imports: any[] = [
    CommonModule,
    MatIconModule
];

let providers: any[] = [
];

let declarations: any[] = [
    IvyAngularMaterialDeleteRestoreComponent,
    IvyAngularMaterialExpandCollapseComponent
];

// NgModule
@NgModule({
    imports: imports,
    providers: providers,
    declarations: declarations,
    exports: declarations
})
export class IvyAngularMaterialIconToggleModule {
}