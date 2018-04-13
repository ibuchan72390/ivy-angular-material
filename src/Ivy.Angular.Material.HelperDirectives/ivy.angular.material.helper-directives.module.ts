'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

import { MatListItemAutoHeightDirective } from './src/Directives/mat-list-item-auto-height.directive';

import { ChildNodeHelperService } from './src/Services/child-node-helper.service';

// Service Collection
let imports: any[] = [
];

let providers: any[] = [
    ChildNodeHelperService
];

let declarations: any[] = [
    MatListItemAutoHeightDirective
];

// NgModule
@NgModule({
    imports: imports,
    providers: providers,
    declarations: declarations,
    exports: declarations
})
export class IvyAngularMaterialHelperDirectivesModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IvyAngularMaterialHelperDirectivesModule,
            providers: providers
        };
    }
}