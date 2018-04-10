import 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';

import { IvyAngularMaterialSizedMaterialIconModule } from '../ivy.angular.material.sized-material-icon.module';

import { MaterialSizedMaterialIconComponent } from '../src/Components/SizedMaterialIcon/sized-material-icon.component';

describe('MaterialSizedMaterialIconComponent', () => {

    // Variables
    let fixture: ComponentFixture<MaterialSizedMaterialIconComponent>;
    let sut: MaterialSizedMaterialIconComponent;


    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialSizedMaterialIconModule
            ]
        });

        fixture = TestBed.createComponent(MaterialSizedMaterialIconComponent);
        sut = fixture.componentInstance;
    });


    // Tests
    //it('Sample Test', () => {
    //});
});