import 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';

import { IvyAngularMaterialNotFoundModule } from '../ivy.angular.material.not-found.module';

import { MaterialNotFoundComponent } from '../src/Components/NotFound/not-found.component';

describe('MaterialNotFoundComponent', () => {

    // Variables
    let fixture: ComponentFixture<MaterialNotFoundComponent>;
    let sut: MaterialNotFoundComponent;


    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialNotFoundModule
            ]
        });

        fixture = TestBed.createComponent(MaterialNotFoundComponent);
        sut = fixture.componentInstance;
    });


    // Tests
    //it('Sample Test', () => {
    //});
});