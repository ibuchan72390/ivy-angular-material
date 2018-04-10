'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

import { MatIconModule } from '@angular/material';

import { MaterialSizedIconComponent } from './src/Components/SizedIcon/sized-icon.component';

// Service Collection
let imports: any[] = [
    MatIconModule
];

let providers: any[] = [
];

let declarations: any[] = [
    MaterialSizedIconComponent
];

// NgModule
@NgModule({
    imports: imports,
    providers: providers,
    declarations: declarations,
    exports: declarations
})
export class IvyAngularMaterialSizedIconModule {
}