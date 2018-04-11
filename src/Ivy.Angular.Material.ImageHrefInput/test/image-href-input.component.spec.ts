import 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';

import { IvyAngularMaterialImageHrefInputModule } from '../ivy.angular.material.image-href-input.module';

import { MaterialImageHrefInputComponent } from '../src/Components/ImageHrefInput/image-href-input.component';

describe('MaterialImageHrefInputComponent', () => {

    // Variables
    let fixture: ComponentFixture<MaterialImageHrefInputComponent>;
    let sut: MaterialImageHrefInputComponent;


    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialImageHrefInputModule
            ]
        });

        fixture = TestBed.createComponent(MaterialImageHrefInputComponent);
        sut = fixture.componentInstance;
    });


    // Tests
    //it('Sample Test', () => {
    //});
});