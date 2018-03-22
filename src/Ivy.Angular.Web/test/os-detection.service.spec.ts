import 'jasmine';

import { Ng2DeviceService } from 'ng2-device-detector';
import { OsDetectionService } from '../src/Services/os-detection.service';

describe('OsDetectionService', () => {

    // isMac
    it('isMac returns true on correct UserAgentString', () => {

        testOsUserAgentString(
            'mac',
            (sut: OsDetectionService) => sut.isMac(),
            true);
    });


    // isAndroid
    it('isAndroid returns true on correct UserAgentString', () => {

        testOsUserAgentString(
            'android',
            (sut: OsDetectionService) => sut.isAndroid(),
            true);
    });


    // isWindows
    it('isWindows returns true on correct UserAgentString', () => {

        testOsUserAgentString(
            'windows',
            (sut: OsDetectionService) => sut.isWindows(),
            true);
    });


    function testOsUserAgentString(
        expectedOsString: string,
        executeFn: (osDetector: OsDetectionService) => boolean,
        expected: boolean) {

        let deviceServiceSpy = new Ng2DeviceService();
        deviceServiceSpy.os = expectedOsString;

        let sut = new OsDetectionService(deviceServiceSpy);

        expect(executeFn(sut)).toBe(expected);
    }
});