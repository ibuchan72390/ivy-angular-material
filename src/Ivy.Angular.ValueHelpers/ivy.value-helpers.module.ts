'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

// Ivy Material Helpers
import { StringHelper } from './src/Services/string-helper.service';
import { MathHelper } from './src/Services/math-helper.service';
import { CollectionHelper } from './src/Services/collection-helper.service';
import { SortOrderService } from './src/Services/sort-order.service'


// Service Collection
let providers: any[] = [
    StringHelper,
    MathHelper,
    CollectionHelper,
    SortOrderService
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