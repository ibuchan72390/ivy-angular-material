'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

// Ivy Web
import { IvyWebModule } from 'ivy.angular.web';

// Ivy Material Helpers
import { MaterialsWidthHelper } from './WidthHelper/materials-width-helper.service';

// Service Collection
let providers: any[] = [
    MaterialsWidthHelper
];

// NgModule
@NgModule({
    imports: [
        IvyWebModule
    ],
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