'use strict';

// Angular
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule, MatOptionModule, MatInputModule, MatIconModule, MatToolbarModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { IvyAngularMaterialLoadingSpinnerModule } from 'ivy.angular.material.loading-spinner';

// Components
import { MaterialPaginatedListComponent } from './src/Components/PaginatedList/paginated-list.component';

// Service Collection
let declarations: any[] = [
    MaterialPaginatedListComponent
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
        MatButtonModule,
        MatProgressSpinnerModule,

        FlexLayoutModule,

        IvyAngularMaterialLoadingSpinnerModule
    ],
    declarations: declarations,
    exports: declarations
})
export class IvyAngularMaterialPaginationModule {
}