'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

// Ivy Material Helpers
import { StringHelper } from './StringHelper/string-helper.service';

// Service Collection
let providers: any[] = [
    StringHelper
];

// NgModule
@NgModule({
    providers: providers
})
export class IvyValueHelpersModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IvyValueHelpersModule,
            providers: providers
        };
    }
}