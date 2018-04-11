import 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';

import { IvyAngularDynamicSideNavModule } from '../ivy.angular.dynamic-side-nav.module';

import { DynamicSideNavComponent } from '../src/Components/DynamicSideNav/dynamic-side-nav.component';

describe('DynamicSideNavComponent', () => {

    // Variables
    let fixture: ComponentFixture<DynamicSideNavComponent>;
    let sut: DynamicSideNavComponent;


    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularDynamicSideNavModule
            ]
        });

        fixture = TestBed.createComponent(DynamicSideNavComponent);
        sut = fixture.componentInstance;
    });


    // Tests
    //it('Sample Test', () => {
    //});
});