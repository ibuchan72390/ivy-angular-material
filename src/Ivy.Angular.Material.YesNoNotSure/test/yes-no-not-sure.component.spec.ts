import 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material';

import { IvyAngularMaterialYesNoNotSureModule } from '../ivy.angular.material.yes-no-not-sure.module';

import { MaterialYesNoNotSureComponent } from '../src/Components/YesNoNotSure/yes-no-not-sure.component';

describe('MaterialYesNoNotSureComponent', () => {

    // Variables
    let fixture: ComponentFixture<MaterialYesNoNotSureComponent>;
    let sut: MaterialYesNoNotSureComponent;

    const yesText: string = 'Yes';
    const yesVal: string = 'y';
    const noText: string = 'No';
    const noVal: string = 'n';
    const notSureText: string = 'Not Sure';
    const notSureVal: string = 'ns';

    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialYesNoNotSureModule
            ]
        });

        fixture = TestBed.createComponent(MaterialYesNoNotSureComponent);
        sut = fixture.componentInstance;

        sut.yesText = yesText;
        sut.yesValue = yesVal;
        sut.noText = noText;
        sut.noValue = noVal;
        sut.notSureText = notSureText;
        sut.notSureValue = notSureVal;

        fixture.detectChanges();
    });


    // Tests
    it('yesText is bound to correct button and emits yesValue on click and sets value on button group', () => {

        let responseVal: string;
        sut.onResponse.subscribe((val: string) => responseVal = val);

        let toggleButtons = fixture.debugElement.queryAll(By.directive(MatButtonToggle));

        let onChange = jasmine.createSpy();
        sut.registerOnChange(onChange);

        // The 0-index is our yes button
        let targetBtn = toggleButtons[0];

        expect(targetBtn.nativeElement.innerText).toBe(yesText);
        expect(targetBtn.attributes['ng-reflect-value']).toBe(yesVal);

        targetBtn.triggerEventHandler('click', {});

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(yesVal);
        expect(responseVal).toBe(yesVal);

        fixture.detectChanges();

        let btnGroup = fixture.debugElement.query(By.directive(MatButtonToggleGroup));
        let boundVal = btnGroup.attributes['ng-reflect-value'];

        expect(boundVal).toBe(yesVal);
    });

    it('noText is bound to correct button and emits noValue on click and sets value on button group', () => {

        let responseVal: string;
        sut.onResponse.subscribe((val: string) => responseVal = val);

        let toggleButtons = fixture.debugElement.queryAll(By.directive(MatButtonToggle));

        let onChange = jasmine.createSpy();
        sut.registerOnChange(onChange);

        // The 1-index is our no button
        let targetBtn = toggleButtons[1];

        expect(targetBtn.nativeElement.innerText).toBe(noText);
        expect(targetBtn.attributes['ng-reflect-value']).toBe(noVal);

        targetBtn.triggerEventHandler('click', {});

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(noVal);
        expect(responseVal).toBe(noVal);

        fixture.detectChanges();

        let btnGroup = fixture.debugElement.query(By.directive(MatButtonToggleGroup));
        let boundVal = btnGroup.attributes['ng-reflect-value'];

        expect(boundVal).toBe(noVal);
    });

    it('notSureText is bound to correct button and emits notSureValue on click and sets value on button group', () => {

        let responseVal: string;
        sut.onResponse.subscribe((val:string) => responseVal = val);

        let toggleButtons = fixture.debugElement.queryAll(By.directive(MatButtonToggle));

        let onChange = jasmine.createSpy();
        sut.registerOnChange(onChange);

        // The 2-index is our NotSure button
        let targetBtn = toggleButtons[2];

        expect(targetBtn.nativeElement.innerText).toBe(notSureText);
        expect(targetBtn.attributes['ng-reflect-value']).toBe(notSureVal);

        targetBtn.triggerEventHandler('click', {});

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(notSureVal);
        expect(responseVal).toBe(notSureVal);

        fixture.detectChanges();

        let btnGroup = fixture.debugElement.query(By.directive(MatButtonToggleGroup));
        let boundVal = btnGroup.attributes['ng-reflect-value'];

        expect(boundVal).toBe(notSureVal);
    });

    it('setDisabled disables the mat-button-group appropriately', () => {

        sut.setDisabledState(true);

        fixture.detectChanges();

        let btnGroup = fixture.debugElement.query(By.directive(MatButtonToggleGroup));

        let disabled = btnGroup.attributes['ng-reflect-disabled'];
        let isDisabled = disabled == 'true';

        expect(isDisabled).toBeTruthy();
    });

    it('onTouch is properly emitted when the mat-button-group emits a blur event', () => {

        let btnGroup = fixture.debugElement.query(By.directive(MatButtonToggleGroup));

        let onTouch = jasmine.createSpy();

        sut.registerOnTouched(onTouch);

        btnGroup.triggerEventHandler('blur', {});

        expect(onTouch).toHaveBeenCalledTimes(1);
    });

    it('writeValue properly configures the initial value for the component', () => {

        sut.writeValue(yesVal);

        fixture.detectChanges();

        let btnGroup = fixture.debugElement.query(By.directive(MatButtonToggleGroup));

        let boundVal = btnGroup.attributes['ng-reflect-value'];

        expect(boundVal).toBe(yesVal);
    });
});