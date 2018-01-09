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
export class IvyMaterialHelpersModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IvyMaterialHelpersModule,
            providers: providers
        };
    }
}