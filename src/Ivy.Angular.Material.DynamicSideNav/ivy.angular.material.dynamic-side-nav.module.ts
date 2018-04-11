'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

import { MatSidenavModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DynamicSideNavService } from './src/Services/dynamic-side-nav.service';
import { MaterialDynamicSideNavComponent } from './src/Components/DynamicSideNav/dynamic-side-nav.component';

// Service Collection
let imports: any[] = [
    MatSidenavModule,
    FlexLayoutModule
];

let providers: any[] = [
    DynamicSideNavService
];

let declarations: any[] = [
    MaterialDynamicSideNavComponent
];

// NgModule
@NgModule({
    imports: imports,
    providers: providers,
    declarations: declarations,
    exports: declarations
})
export class IvyAngularMaterialDynamicSideNavModule {

    static forRoot(): ModuleWithProviders {

        return {
            ngModule: IvyAngularMaterialDynamicSideNavModule,
            providers: providers
        };
    }
}