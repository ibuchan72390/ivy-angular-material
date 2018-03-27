'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';

import { IvyWebModule } from 'ivy.angular.web';

import { DynamicIFrameComponent } from './src/Components/DynamicIFrame/dynamic-i-frame.component';

// Service Collection
let providers: any[] = [
];

let declarations: any[] = [
    DynamicIFrameComponent
];

// NgModule
@NgModule({
    imports: [
        CommonModule
    ],
    providers: providers,
    declarations: declarations,
    exports: declarations
})
export class IvyAngularDynamicIFrameModule {
}