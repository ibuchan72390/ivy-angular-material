'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

// Ng2DeviceDetector
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';

import { OsDetectionService } from './src/Services/os-detection.service';
import { BrowserDetectionService } from './src/Services/browser-detection.service';
import { WindowRefService } from './src/Services/window-ref.service';
import { MobileDetectionService } from './src/Services/mobile-detection.service'

// Service Collection
let providers: any[] = [
    OsDetectionService,
    BrowserDetectionService,
    WindowRefService,
    MobileDetectionService
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