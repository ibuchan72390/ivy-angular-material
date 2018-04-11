'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

import { MatInputModule, MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule, Directive } from '@angular/flex-layout';

import { IvyAngularFullImageModule } from 'ivy.angular.full-image';

import { MaterialImageHrefInputComponent } from './src/Components/ImageHrefInput/image-href-input.component';

// Service Collection
let imports: any[] = [
    CommonModule,
    FormsModule,

    MatInputModule,
    MatCheckboxModule,

    IvyAngularFullImageModule,

    FlexLayoutModule
];

let providers: any[] = [
];

let declarations: any[] = [
    MaterialImageHrefInputComponent
];

// NgModule
@NgModule({
    imports: imports,
    providers: providers,
    declarations: declarations,
    exports: declarations
})
export class IvyAngularMaterialImageHrefInputModule {
}