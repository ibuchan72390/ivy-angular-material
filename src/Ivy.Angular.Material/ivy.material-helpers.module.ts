'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

// Ivy Material Helpers
import { MaterialsWidthHelper } from './WidthHelper/materials-width-helper.service';

// Service Collection
let providers: any[] = [
    MaterialsWidthHelper
];

// NgModule
@NgModule({
    providers: providers
})
export class IvyMaterialModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IvyMaterialModule,
            providers: providers
        };
    }
}