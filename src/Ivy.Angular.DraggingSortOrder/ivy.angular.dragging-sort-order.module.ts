'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { DraggingSortOrderComponent } from './src/Components/DraggingSortOrder/dragging-sort-order.component';

// Service Collection
let imports: any[] = [
    DragulaModule
];

let providers: any[] = [
];

let declarations: any[] = [
    DraggingSortOrderComponent
];

// NgModule
@NgModule({
    imports: imports,
    providers: providers,
    declarations: declarations,
    exports: declarations
})
export class IvyAngularDraggingSortOrderModule {
}