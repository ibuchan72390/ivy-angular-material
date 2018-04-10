import 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';

import { IvyAngularMaterialSizedIconModule } from '../ivy.angular.material.sized-icon.module';

import { MaterialSizedIconComponent } from '../src/Components/SizedIcon/sized-icon.component';

describe('MaterialSizedIconComponent', () => {

    // Variables
    let fixture: ComponentFixture<MaterialSizedIconComponent>;
    let sut: MaterialSizedIconComponent;


    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialSizedIconModule
            ]
        });

        fixture = TestBed.createComponent(MaterialSizedIconComponent);
        sut = fixture.componentInstance;
    });


    // Tests
    //it('Sample Test', () => {
    //});
});