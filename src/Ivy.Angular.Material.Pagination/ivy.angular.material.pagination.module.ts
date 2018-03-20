'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

// Components
import { PaginatedListComponent } from './src/Components/PaginatedList/paginated-list.component';

// Service Collection
let declarations: any[] = [
    PaginatedListComponent,
];


// NgModule
@NgModule({
    declarations: declarations,
    exports: declarations
})
export class IvyAngularMaterialPaginationModule {
}