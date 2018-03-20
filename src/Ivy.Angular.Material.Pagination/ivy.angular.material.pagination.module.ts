'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatSelectModule, MatOptionModule, MatInputModule, MatIconModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import { PaginatedListComponent } from './src/Components/PaginatedList/paginated-list.component';

// Service Collection
let declarations: any[] = [
    PaginatedListComponent,
];


// NgModule
@NgModule({
    imports: [

        CommonModule,
        FormsModule,

        MatSelectModule,
        MatOptionModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,

        FlexLayoutModule
    ],
    declarations: declarations,
    exports: declarations
})
export class IvyAngularMaterialPaginationModule {
}