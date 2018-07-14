'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

import { MatIconModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IvyAngularCollapsiblePanelModule } from 'ivy.angular.collapsible-panel';

import { MaterialExpandingTitleMatCardComponent } from './src/Components/ExpandingTitleMatCard/expanding-title-mat-card.component';

// Service Collection
let imports: any[] = [
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    IvyAngularCollapsiblePanelModule
];

let providers: any[] = [
];

let declarations: any[] = [
    MaterialExpandingTitleMatCardComponent
];

// NgModule
@NgModule({
    imports: imports,
    providers: providers,
    declarations: declarations,
    exports: declarations
})
export class IvyAngularMaterialExpandingTitleMatCardModule {

}