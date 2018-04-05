import 'jasmine';

import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { IvyWebModule } from 'ivy.angular.web';
import { IvyAngularVideoPlayerModule } from '../ivy.angular.video-player.module';

import { MacMobileAutoPlayDirective } from '../src/Directives/mac-mobile-autoplay.directive';

describe('MacMobileAutoplayDirective', () => {

    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;
    let sut: MacMobileAutoPlayDirective;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyWebModule,
                IvyAngularVideoPlayerModule
            ],
            declarations: [
                TestComponent
            ]
        });
    });


    it('Sample Test', () => {

        // Don't set these until here so we can override the template in each test respectively
        //fixture = TestBed.overrideComponent(TestComponent, {
        //    set: {
        //        template: '<div mac-mobile-autoplay></div>'
        //    }
        //}).createComponent(TestComponent);

        fixture = TestBed.createComponent(TestComponent);

        component = fixture.componentInstance;

        sut = fixture.debugElement.injector.get(MacMobileAutoPlayDirective);

    });
});


@Component({
    selector: 'ivy-test-component',
    template: '<div mac-mobile-autoplay></div>'
})
export class TestComponent {
}