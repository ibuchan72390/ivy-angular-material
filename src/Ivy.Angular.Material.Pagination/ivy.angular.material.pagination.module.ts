'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule, MatOptionModule, MatInputModule, MatIconModule, MatToolbarModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { IvyAngularMaterialLoadingSpinnerModule } from 'ivy.angular.material.loading-spinner';

// Components
import { MaterialPaginatedListComponent } from './src/Components/PaginatedList/paginated-list.component';

import { PaginationHelperService } from './src/Services/pagination-helper.service';


let declarations: any[] = [
    MaterialPaginatedListComponent
];

let providers: any[] = [
    PaginationHelperService
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
    exports: declarations,
    providers: providers
})
export class IvyAngularMaterialPaginationModule {

    static forRoot(): ModuleWithProviders {

        return {
            ngModule: IvyAngularMaterialPaginationModule,
            providers: providers
        }
    }
}