'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { IvyAngularMaterialSizedIconModule } from 'ivy.angular.material.sized-icon';

import { IvyAngularMaterialDeleteRestoreComponent } from './src/Components/DeleteRestore/delete-restore.component';
import { IvyAngularMaterialExpandCollapseComponent } from './src/Components/ExpandCollapse/expand-collapse.component';
import { IvyAngularMaterialCheckboxToggleComponent } from './src/Components/CheckboxToggle/checkbox-toggle.component';


// Service Collection
let imports: any[] = [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    IvyAngularMaterialSizedIconModule
];

let providers: any[] = [
];

let declarations: any[] = [
    IvyAngularMaterialDeleteRestoreComponent,
    IvyAngularMaterialExpandCollapseComponent,
    IvyAngularMaterialCheckboxToggleComponent
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