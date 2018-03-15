import 'jasmine';

import { BrowserDetectionService } from '../src/Detection/browser-detection.service';
import { Ng2DeviceService } from 'ng2-device-detector';

describe('BrowserDetectionService', () => {

    // isFirefox
    it('isFirefox returns true on correct UserAgentString', () => {

        testBrowserUserAgentString(
            'firefox',
            (bd: BrowserDetectionService) => bd.isFirefox(),
            true);
    });

    // isChrome
    it('isChrome returns true on correct UserAgentString', () => {

        testBrowserUserAgentString(
            'chrome',
            (bd: BrowserDetectionService) => bd.isChrome(),
            true);
    });

    // isSafari
    it('isSafari returns true on correct UserAgentString', () => {

        testBrowserUserAgentString(
            'safari',
            (bd: BrowserDetectionService) => bd.isSafari(),
            true);
    });

    // isInternetExplorer
    it('isInternetExplorer returns true on correct UserAgentString', () => {

        testBrowserUserAgentString(
            'ms-ie',
            (bd: BrowserDetectionService) => bd.isInternetExplorer(),
            true);
    });

    // isEdge
    it('isEdge returns true on correct UserAgentString', () => {

        testBrowserUserAgentString(
            'ms-edge',
            (bd: BrowserDetectionService) => bd.isEdge(),
            true);
    });

    // isOpera
    it('isOpera returns true on correct UserAgentString', () => {

        testBrowserUserAgentString(
            'opera',
            (bd: BrowserDetectionService) => bd.isOpera(),
            true);
    });

    // isOther
    it('isOther returns true on correct UserAgentString', () => {

        testBrowserUserAgentString(
            'test',
            (bd: BrowserDetectionService) => bd.isOther(),
            false);
    });

    function testBrowserUserAgentString(
        expectedAgentString: string,
        executeFn: (browserDetector: BrowserDetectionService) => boolean,
        expected: boolean) {

        let deviceServiceSpy = new Ng2DeviceService();
        deviceServiceSpy.browser = expectedAgentString;

        let sut = new BrowserDetectionService(deviceServiceSpy);

        expect(executeFn(sut)).toBe(expected);
    }
});