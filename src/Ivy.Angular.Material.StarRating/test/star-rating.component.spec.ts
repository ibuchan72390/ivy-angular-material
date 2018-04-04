import 'jasmine';

import { DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MatIcon } from '@angular/material';

import { By } from '@angular/platform-browser';

import { IvyValueHelpersModule } from 'ivy.angular.value-helpers';

import { IvyAngularMaterialStarRatingModule } from '../ivy.angular.material.star-rating.module';

import { MaterialStarRatingComponent } from '../src/Components/StarRating/star-rating.component';

describe('MaterialStarRatingComponent', () => {

    // Variables
    let fixture: ComponentFixture<MaterialStarRatingComponent>;
    let sut: MaterialStarRatingComponent;


    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialStarRatingModule,
                IvyValueHelpersModule
            ]
        });

        fixture = TestBed.createComponent(MaterialStarRatingComponent);
        sut = fixture.componentInstance;
    });


    // Tests
    it('max value is properly applied to the enumeration array', () => {

        const max: number = 5;

        sut.max = max;

        let arr = sut.getEnumerationArray();

        expect(arr.length).toBe(max);

        for (var i = 0; i < arr.length; i++) {
            expect(arr[i]).toBe(i + 1);
        }
    });

    it('setValue properly updates the value and emits the onChange event', () => {

        let onChange = jasmine.createSpy();

        sut.registerOnChange(onChange);

        let val = 123;

        sut.setValue(val);

        expect(sut.value).toBe(val);

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(val);
    });

    it('getIconString returns filled star when less than or equal to value', () => {

        let val = 5;

        sut.writeValue(val);

        expect(sut.getIconString(0)).toBe('star');
    });

    it('getIconString returns border star when greater than value', () => {

        let val = 5;

        sut.writeValue(val);

        expect(sut.getIconString(10)).toBe('star_border');
    });

    it('getIconColor returns empty for disabled', () => {

        let disabled = true;

        sut.setDisabledState(disabled);

        expect(sut.getDisabled()).toBe(disabled);
        expect(sut.getIconColor()).toBe('');
    });

    it('getIconColor returns accent for non-disabled', () => {

        let disabled = false;

        sut.setDisabledState(disabled);

        expect(sut.getDisabled()).toBe(disabled);
        expect(sut.getIconColor()).toBe('accent');
    });

    it('writeValue sets the initial value', () => {

        const val = 123;

        sut.writeValue(val);

        expect(sut.value).toBe(val);
    });

    it('onTouch executes on touch of div', () => {

        let touchFn = jasmine.createSpy();

        sut.registerOnTouched(touchFn);

        let rootNode: DebugElement = fixture.debugElement.childNodes[0] as DebugElement;

        rootNode.triggerEventHandler('click', {});

        expect(touchFn).toHaveBeenCalledTimes(1);

        rootNode.triggerEventHandler('click', {});

        expect(touchFn).toHaveBeenCalledTimes(2);
    });

    it('icon touch emits a new value applicable to its index', () => {

        let onChange = jasmine.createSpy();
        sut.registerOnChange(onChange);

        const max: number = 5;
        sut.max = max;

        fixture.detectChanges();

        let rootNode: DebugElement = fixture.debugElement.childNodes[0] as DebugElement;

        let iconElems = rootNode.queryAll(By.directive(MatIcon));

        let lastElem = iconElems[iconElems.length - 1];

        let elemValue = iconElems.indexOf(lastElem) + 1;

        lastElem.triggerEventHandler('click', {});

        expect(sut.value).toBe(elemValue);
        expect(onChange).toHaveBeenCalledWith(elemValue);
        expect(onChange).toHaveBeenCalledTimes(1);

        // Should probably assert on some classes
        // Should probably assert on click changes with classes and colors
    });
});