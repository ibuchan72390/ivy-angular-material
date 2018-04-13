import 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IvyValueHelpersModule } from 'ivy.angular.value-helpers';
import { IvyWebModule } from 'ivy.angular.web';

import { By } from '@angular/platform-browser';

import { MatInput, MatCheckbox } from '@angular/material';

import { LayoutAlignDirective } from '@angular/flex-layout';

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
                BrowserAnimationsModule,
                IvyAngularMaterialImageHrefInputModule,
                IvyValueHelpersModule,
                IvyWebModule
            ]
        });

        fixture = TestBed.createComponent(MaterialImageHrefInputComponent);
        sut = fixture.componentInstance;
    });


    // Tests
    it('imageHrefInputComponent fires touch event on blur of url input', () => {

        let touchSpy = jasmine.createSpy();

        sut.registerOnTouched(touchSpy);

        fixture.detectChanges();

        let inputElem = fixture.debugElement.query(By.directive(MatInput));
        
        inputElem.triggerEventHandler('blur', {});

        expect(touchSpy).toHaveBeenCalledTimes(1);
    });

    it('imageHrefInputComponent fires onChangeFn on keyUp of url input', () => {

        let changeSpy = jasmine.createSpy();

        sut.registerOnChange(changeSpy);

        let inputElem = fixture.debugElement.query(By.directive(MatInput));

        inputElem.nativeElement.value = 'TESTING';

        fixture.detectChanges();

        inputElem.triggerEventHandler('keyup', {});

        expect(changeSpy).toHaveBeenCalledTimes(1);
        expect(changeSpy).toHaveBeenCalledWith(inputElem.nativeElement.value);
    });

    it('getCurrentValue returns the value of the inbox', () => {

        let changeSpy = jasmine.createSpy();

        sut.registerOnChange(changeSpy);

        let inputElem = fixture.debugElement.query(By.directive(MatInput));

        inputElem.triggerEventHandler('keyup', {});

        inputElem.nativeElement.value = 'TESTING';
        
        fixture.detectChanges();

        expect(sut.getCurrentValue()).toBe(inputElem.nativeElement.value);
    });

    it('placeholder input is bound appropriately', () => {

        let placeholder = 'testing';

        sut.placeholder = placeholder;

        fixture.detectChanges();

        let inputElem = fixture.debugElement.query(By.directive(MatInput));

        expect(inputElem.nativeElement.placeholder).toBe(placeholder);
    });

    it('previewText input is bound appropriately', () => {

        let previewText = 'preview';

        sut.previewText = previewText;

        fixture.detectChanges();

        let checkbox = fixture.debugElement.query(By.directive(MatCheckbox));

        expect(checkbox.nativeElement.innerText.trim()).toBe(previewText);
    });

    it('matCheckbox is disabled if the regex pattern match is false', () => {

        let inputElem = fixture.debugElement.query(By.directive(MatInput));

        inputElem.nativeElement.value = 'TESTING';

        fixture.detectChanges();

        expect(sut.previewDisabled()).toBeTruthy();

        let checkbox = fixture.debugElement.query(By.directive(MatCheckbox));

        expect(checkbox.nativeElement.attributes['ng-reflect-disabled'].value).toBe('true');

        inputElem.nativeElement.value = 'http://www.google.com';

        fixture.detectChanges();

        expect(checkbox.nativeElement.attributes['ng-reflect-disabled'].value).toBe('false');
    });

    it('matCheckbox exposes full image if not disabled and clicked', () => {

        let inputElem = fixture.debugElement.query(By.directive(MatInput));

        inputElem.nativeElement.value = 'https://images.sftcdn.net/images/t_optimized,f_auto/p/ce2ece60-9b32-11e6-95ab-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg';

        fixture.detectChanges();

        let previewDisabled = sut.previewDisabled();

        expect(previewDisabled).toBeFalsy();

        let checkbox = fixture.debugElement.query(By.directive(MatCheckbox));

        expect(checkbox.nativeElement.attributes['ng-reflect-disabled'].value).toBe('false');

        let fullImageDiv = fixture.debugElement.query(By.directive(LayoutAlignDirective));

        expect(fullImageDiv).toBe(null);

        sut.previewImage = true;

        fixture.detectChanges();

        fullImageDiv = fixture.debugElement.query(By.directive(LayoutAlignDirective));

        let fullImageElem = fullImageDiv.children[0];

        // Full URL doesn't appear to be getting bound in here as I would expect
        let urlSrcIndex = inputElem.nativeElement.value.indexOf(fullImageElem.nativeElement.attributes['ng-reflect-src'].value);

        expect(urlSrcIndex).toBeGreaterThan(-1);
    });
});