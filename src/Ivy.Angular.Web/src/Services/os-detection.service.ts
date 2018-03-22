import { Injectable } from '@angular/core';

import { Ng2DeviceService } from 'ng2-device-detector';

@Injectable()
export class OsDetectionService {

    constructor(
        private deviceSvc: Ng2DeviceService) {
    }


    isMac(): boolean {
        return this.testOs('mac');
    }

    isAndroid(): boolean {
        return this.testOs('android');
    }

    isWindows(): boolean {
        return this.testOs('windows');
    }


    private testOs(os: string): boolean {

        return this.deviceSvc.os.toLowerCase() == os.toLowerCase();
    }
}