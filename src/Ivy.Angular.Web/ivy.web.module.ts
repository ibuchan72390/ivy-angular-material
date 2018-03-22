'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

// Ng2DeviceDetector
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';

import { OsDetectionService } from './src/Services/os-detection.service';
import { BrowserDetectionService } from './src/Services/browser-detection.service';
import { WindowRefService } from './src/Services/window-ref.service';

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