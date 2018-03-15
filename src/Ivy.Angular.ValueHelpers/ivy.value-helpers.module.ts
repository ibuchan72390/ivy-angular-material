'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

// Ivy Material Helpers
import { StringHelper } from './src/StringHelper/string-helper.service';
import { MathHelper } from './src/MathHelper/math-helper.service';


// Service Collection
let providers: any[] = [
    StringHelper,
    MathHelper
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