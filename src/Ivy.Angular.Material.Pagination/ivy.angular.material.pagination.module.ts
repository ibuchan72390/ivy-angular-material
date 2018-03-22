'use strict';

// Angular
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

// Components
import { PaginatedListComponent } from './src/Components/PaginatedList/paginated-list.component';

// Service Collection
let declarations: any[] = [
    PaginatedListComponent,
];


// NgModule
@NgModule({
    imports: [CommonModule],
    declarations: declarations,
    exports: declarations
})
export class IvyAngularMaterialPaginationModule {
}