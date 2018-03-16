/*
 * This will be a simple test to demonstrate that this test configurator will allow us to load a component.
 * We will create a simple component in this class, register it using the configurator, then resolve it
 * using the TestBed.
 *
 * This demonstrates that the TestBed can be properly configured through this class and components can be
 * properly resolved as well.
 */

import 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';

import { configureWebTests } from '../src/tests.web.configure';

describe('test.web.configure', () => {

    let fixture: ComponentFixture<TestComponent>;
    let sut: TestComponent;


    beforeEach(doneFn => {

        const configure: (TestBed: TestBed) => void =
            (testBed: TestBed) => {
                testBed.configureTestingModule({
                    declarations: [
                        TestComponent
                    ]
                });
            };

        configureWebTests(configure).then((testBed: TestBed) => {

            fixture = testBed.createComponent(TestComponent);
            //sut = fixture.component;

            doneFn();
        });
    });


    it('configurator properly configures TestBed', () => {

        expect(fixture).not.toBe(undefined);
        expect(fixture).not.toBe(null);
    });

});




/*
 * Test Component
 */
import { Component, Input } from '@angular/core';

@Component({
    selector: 'ivy-test-component',
    template: '<h1>{{text}}</h1>'
})
class TestComponent {

    @Input()
    text: string;
}