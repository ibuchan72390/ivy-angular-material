import 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';

import { IvyAngularMaterialYesNotNotSureModule } from '../ivy.angular.material.yes-not-not-sure.module';

import { MaterialYesNotNotSureComponent } from '../src/Components/YesNotNotSure/yes-not-not-sure.component';

describe('MaterialYesNotNotSureComponent', () => {

    // Variables
    let fixture: ComponentFixture<MaterialYesNotNotSureComponent>;
    let sut: MaterialYesNotNotSureComponent;


    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialYesNotNotSureModule
            ]
        });

        fixture = TestBed.createComponent(MaterialYesNotNotSureComponent);
        sut = fixture.componentInstance;
    });


    // Tests
    //it('Sample Test', () => {
    //});
});