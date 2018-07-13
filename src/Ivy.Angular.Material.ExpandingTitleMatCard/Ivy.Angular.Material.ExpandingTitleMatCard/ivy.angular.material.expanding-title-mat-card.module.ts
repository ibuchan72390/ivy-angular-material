'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

import { MatSidenavModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

// Service Collection
let imports: any[] = [
    MatSidenavModule,
    FlexLayoutModule
];

let providers: any[] = [
];

let declarations: any[] = [
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