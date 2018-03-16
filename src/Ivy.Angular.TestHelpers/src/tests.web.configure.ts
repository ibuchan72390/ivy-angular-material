/*
 * This class was based on the TestBed configuration info from the following article:
 * https://angular-2-training-book.rangle.io/handout/testing/intro-to-tdd/setup/testbed-configuration.html
 */

import {
    getTestBed,
    ComponentFixtureAutoDetect,
    TestBed,
} from '@angular/core/testing';

import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

export const configureWebTests = (configure: (testBed: TestBed) => void): Promise<TestBed> => {

    const testBed = getTestBed();

    if (testBed.platform == null) {
        testBed.initTestEnvironment(
            BrowserDynamicTestingModule,
            platformBrowserDynamicTesting());
    }

    testBed.configureCompiler({
        providers: [
            { provide: ComponentFixtureAutoDetect, useValue: true },
        ]
    });

    configure(testBed);

    return testBed.compileComponents()
        .catch(err => {
            console.log('Test Bed Init Err: ', err);
        })
        .then(() => {
            return testBed;
        });
};