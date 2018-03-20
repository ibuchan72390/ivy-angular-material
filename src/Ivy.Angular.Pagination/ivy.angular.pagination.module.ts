'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

// Components
import { ScrollingLoadComponent } from './src/Components/ScrollingLoad/scrolling-load.component';

// Service Collection
let declarations: any[] = [
    ScrollingLoadComponent
];


// NgModule
@NgModule({
    declarations: declarations,
    exports: declarations
})
export class IvyAngularPaginationModule {
}