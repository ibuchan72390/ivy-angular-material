'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

import { OsDetectionService } from './Detection/os-detection.service';
import { BrowserDetectionService } from './Detection/browser-detection.service';
import { WindowRefService } from './Reference/window-ref.service';

// Service Collection
let providers: any[] = [
    OsDetectionService,
    BrowserDetectionService,
    WindowRefService
];

// NgModule
@NgModule({
    providers: providers
})
export class IvyWebModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IvyWebModule,
            providers: providers
        };
    }
}