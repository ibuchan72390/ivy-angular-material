import 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';

import { IvyValueHelpersModule } from '../ivy.value-helpers.module';

import { StringHelper } from '../src/Services/string-helper.service';
import { ValidationHelper } from '../src/Services/validation-helper.service';

describe('ValidationHelperService', () => {

    // Variables
    let sut: ValidationHelper;


    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyValueHelpersModule
            ]
        });

        sut = TestBed.get(ValidationHelper);
    });


    // stringIsNotNullOrEmpty
    it('stringIsNotNullOrEmpty throws error if isNullOrEmpty true', () => {

        const err: string = 'Error';

        let stringHelper = TestBed.get(StringHelper);

        spyOn(stringHelper, 'isNullOrEmpty').and.returnValue(true);

        expect(() => sut.stringIsNotNullOrEmpty('test', err)).toThrow(err);
    });

    it('stringIsNotNullOrEmpty does not throw error if isNullOrEmpty false', () => {

        const err: string = 'Error';

        let stringHelper = TestBed.get(StringHelper);

        spyOn(stringHelper, 'isNullOrEmpty').and.returnValue(false);

        expect(() => sut.stringIsNotNullOrEmpty('test', err)).not.toThrow(err);
    });

});