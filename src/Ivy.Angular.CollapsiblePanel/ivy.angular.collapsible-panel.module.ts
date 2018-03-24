'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CollapsiblePanelComponent } from './src/Components/CollapsiblePanel/collapsible-panel.component';

// Service Collection
let components: any[] = [
    CollapsiblePanelComponent
];

// NgModule
@NgModule({
    declarations: components,
    exports: components
})
export class IvyAngularCollapsiblePanelModule {
}