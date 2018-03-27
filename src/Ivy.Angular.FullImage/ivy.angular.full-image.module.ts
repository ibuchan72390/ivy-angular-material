'use strict';

// Angular
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { FullImageComponent } from './src/Component/FullImage/full-image.component';

// Service Collection
let imports: any[] = [
    CommonModule
];

let providers: any[] = [
];

let declarations: any[] = [
    FullImageComponent
];

// NgModule
@NgModule({
    imports: imports,
    providers: providers,
    declarations: declarations,
    exports: declarations
})
export class IvyAngularFullImageModule {
}