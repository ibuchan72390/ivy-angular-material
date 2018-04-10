import 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { MatIcon } from '@angular/material';

import { IvyAngularMaterialIconToggleModule } from '../ivy.angular.material.icon-toggle.module';

import { IvyAngularMaterialCheckboxToggleComponent } from '../src/Components/CheckboxToggle/checkbox-toggle.component';

describe('IvyAngularMaterialCheckboxToggleComponent', () => {

    // Variables
    let fixture: ComponentFixture<IvyAngularMaterialCheckboxToggleComponent>;
    let sut: IvyAngularMaterialCheckboxToggleComponent;


    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialIconToggleModule
            ]
        });

        fixture = TestBed.createComponent(IvyAngularMaterialCheckboxToggleComponent);
        sut = fixture.componentInstance;
    });


    // Tests
    it('ExpandCollapse renders the button as expected for checked === true', () => {

        sut.checked = true;

        fixture.detectChanges();

        let iconElem = fixture.debugElement.query(By.directive(MatIcon));

        expect(iconElem.nativeElement.innerText.trim()).toBe('check_box');
    });

    it('ExpandCollapse renders the button as expected for checked === false', () => {

        sut.checked = false;

        fixture.detectChanges();

        let iconElem = fixture.debugElement.query(By.directive(MatIcon));

        expect(iconElem.nativeElement.innerText.trim()).toBe('check_box_outline_blank');
    });

    it('ExpandCollapse assigns color correctly', () => {

        sut.color = 'accent';

        fixture.detectChanges();

        let elem = fixture.debugElement.children[0];

        expect(elem.attributes['ng-reflect-icon-color']).toBe(sut.color);
    });

    it('ExpandCollapse assigns iconSize correctly', () => {

        sut.iconSize = '48px';

        fixture.detectChanges();

        let elem = fixture.debugElement.children[0];

        expect(elem.attributes['ng-reflect-icon-size']).toBe(sut.iconSize);
    });
});