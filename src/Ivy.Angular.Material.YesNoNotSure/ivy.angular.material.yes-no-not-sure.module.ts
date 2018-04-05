'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material';

import { MaterialYesNoNotSureComponent } from './src/Components/YesNoNotSure/yes-no-not-sure.component';

// Service Collection
let imports: any[] = [
    MatButtonToggleModule
];

let providers: any[] = [
];

let declarations: any[] = [
    MaterialYesNoNotSureComponent
];

// NgModule
@NgModule({
    imports: imports,
    providers: providers,
    declarations: declarations,
    exports: declarations
})
export class IvyAngularMaterialYesNoNotSureModule {
}