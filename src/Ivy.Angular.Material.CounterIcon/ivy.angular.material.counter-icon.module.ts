'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

import { MaterialCounterIconComponent } from './src/Components/CounterIcon/counter-icon.component';

// Service Collection
let imports: any[] = [
    CommonModule,
    MatIconModule
];

let providers: any[] = [
];

let declarations: any[] = [
    MaterialCounterIconComponent
];

// NgModule
@NgModule({
    imports: imports,
    providers: providers,
    declarations: declarations,
    exports: declarations
})
export class IvyAngularMaterialCounterIconModule {
}