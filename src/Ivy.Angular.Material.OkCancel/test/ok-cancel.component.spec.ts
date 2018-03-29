import 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IvyAngularMaterialOkCancelModule } from '../ivy.angular.material.ok-cancel.module';

import { MaterialOkCancelComponent } from '../src/Components/OkCancel/ok-cancel.component';

describe('MaterialOkCancelComponent', () => {

    // Variables
    let fixture: ComponentFixture<MaterialOkCancelComponent>;
    let sut: MaterialOkCancelComponent;


    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialOkCancelModule,
                BrowserAnimationsModule
            ]
        });

        fixture = TestBed.createComponent(MaterialOkCancelComponent);
        sut = fixture.componentInstance;
    });


    // Tests
    it('OkCancel binds values to the appropriate buttons for initial answer', () => {

        sut.areYouSureText = 'are you sure?';
        sut.yesText = 'yes';
        sut.noText = 'no';
        sut.okText = 'ok';
        sut.cancelText = 'cancel';

        sut.okButtonIcon = 'done';
        sut.cancelButtonIcon = 'clear';

        fixture.detectChanges();

        // confirm ok bindings
        let okMatIcon = fixture.debugElement.nativeElement.querySelector('#okButton').querySelector('mat-icon');
        expect(okMatIcon.innerText).toBe(sut.okButtonIcon);

        let okTextSpan = fixture.debugElement.nativeElement.querySelector('#okButton').querySelector('span');
        let okTextContains = okTextSpan.innerText.indexOf(sut.okText) > -1;
        expect(okTextContains).toBeTruthy();


        // confirm cancel bindings
        let cancelMatIcon = fixture.debugElement.nativeElement.querySelector('#cancelButton').querySelector('mat-icon');
        expect(cancelMatIcon.innerText).toBe(sut.cancelButtonIcon);

        let cancelTextSpan = fixture.debugElement.nativeElement.querySelector('#cancelButton').querySelector('span');
        let cancelTextContains = cancelTextSpan.innerText.indexOf(sut.cancelText) > -1;
        expect(cancelTextContains).toBeTruthy();
    });

    it('OkCancel hides ok / cancel values accordingly', () => {

        sut.areYouSureText = 'are you sure?';
        sut.yesText = 'yes';
        sut.noText = 'no';
        sut.okText = 'ok';
        sut.cancelText = 'cancel';

        sut.okButtonIcon = 'done';
        sut.cancelButtonIcon = 'clear';

        sut.showOk = false;
        sut.showCancel = false;

        fixture.detectChanges();

        // confirm ok bindings
        let okButton = fixture.debugElement.nativeElement.querySelector('#okButton');
        expect(okButton).toBe(null);

        let cancelButton = fixture.debugElement.nativeElement.querySelector('#cancelButton');
        expect(cancelButton).toBe(null);
    });

    it('OkCancel disables ok / cancel values accordingly', () => {

        sut.areYouSureText = 'are you sure?';
        sut.yesText = 'yes';
        sut.noText = 'no';
        sut.okText = 'ok';
        sut.cancelText = 'cancel';

        sut.okButtonIcon = 'done';
        sut.cancelButtonIcon = 'clear';

        sut.okDisabled = true;
        sut.cancelDisabled = true;

        fixture.detectChanges();

        // confirm ok bindings
        let okButton = fixture.debugElement.nativeElement.querySelector('#okButton');
        expect(okButton.disabled).toBe(true);

        let cancelButton = fixture.debugElement.nativeElement.querySelector('#cancelButton');
        expect(cancelButton.disabled).toBe(true);
    });

    it('ok fires ok on click if not confirming', () => {

        sut.areYouSureText = 'are you sure?';
        sut.yesText = 'yes';
        sut.noText = 'no';
        sut.okText = 'ok';
        sut.cancelText = 'cancel';

        sut.okButtonIcon = 'done';
        sut.cancelButtonIcon = 'clear';

        sut.showOk = true;
        sut.showCancel = true;

        sut.confirmOk = false;

        fixture.detectChanges();

        let okClicked: boolean = false;
        sut.onOk.subscribe(() => okClicked = true);

        let okButton = fixture.debugElement.nativeElement.querySelector('#okButton');

        let okClick = new Event('click');
        okButton.dispatchEvent(okClick);

        expect(okClicked).toBeTruthy();
    });

    it('ok fires ok after confirmation click if confirming', () => {

        // Arrange
        sut.areYouSureText = 'are you sure?';
        sut.yesText = 'yes';
        sut.noText = 'no';
        sut.okText = 'ok';
        sut.cancelText = 'cancel';

        sut.okButtonIcon = 'done';
        sut.cancelButtonIcon = 'clear';

        sut.showOk = true;
        sut.showCancel = true;

        sut.confirmOk = true;

        fixture.detectChanges();

        // Act 1
        let okClicked: boolean = false;
        sut.onOk.subscribe(() => okClicked = true);

        let okButton = fixture.debugElement.nativeElement.querySelector('#okButton');

        let clickEvent = new Event('click');
        okButton.dispatchEvent(clickEvent);

        expect(okClicked).toBeFalsy();


        // Act 2
        let confirmButton = fixture.debugElement.nativeElement.querySelector('#confirmYes');

        confirmButton.dispatchEvent(clickEvent);

        expect(okClicked).toBeTruthy();
    });

    it('ok does not fire if confirmation click is denied and confirming', () => {

        // Arrange
        sut.areYouSureText = 'are you sure?';
        sut.yesText = 'yes';
        sut.noText = 'no';
        sut.okText = 'ok';
        sut.cancelText = 'cancel';

        sut.okButtonIcon = 'done';
        sut.cancelButtonIcon = 'clear';

        sut.showOk = true;
        sut.showCancel = true;

        sut.confirmOk = true;

        fixture.detectChanges();

        // Act 1
        let okClicked: boolean = false;
        sut.onOk.subscribe(() => okClicked = true);

        let okButton = fixture.debugElement.nativeElement.querySelector('#okButton');

        let clickEvent = new Event('click');
        okButton.dispatchEvent(clickEvent);

        expect(okClicked).toBeFalsy();


        // Act 2
        let confirmButton = fixture.debugElement.nativeElement.querySelector('#confirmNo');

        confirmButton.dispatchEvent(clickEvent);

        expect(okClicked).toBeFalsy();
    });

    it('cancel fires cancel on click if not confirming', () => {

        sut.areYouSureText = 'are you sure?';
        sut.yesText = 'yes';
        sut.noText = 'no';
        sut.okText = 'ok';
        sut.cancelText = 'cancel';

        sut.okButtonIcon = 'done';
        sut.cancelButtonIcon = 'clear';

        sut.showOk = true;
        sut.showCancel = true;

        sut.confirmCancel = false;

        fixture.detectChanges();

        let cancelClicked: boolean = false;
        sut.onCancel.subscribe(() => cancelClicked = true);

        let cancelButton = fixture.debugElement.nativeElement.querySelector('#cancelButton');

        let okClick = new Event('click');
        cancelButton.dispatchEvent(okClick);

        expect(cancelClicked).toBeTruthy();
    });

    it('cancel fires cancel after confirmation click if confirming', () => {

        // Arrange
        sut.areYouSureText = 'are you sure?';
        sut.yesText = 'yes';
        sut.noText = 'no';
        sut.okText = 'ok';
        sut.cancelText = 'cancel';

        sut.okButtonIcon = 'done';
        sut.cancelButtonIcon = 'clear';

        sut.showOk = true;
        sut.showCancel = true;

        sut.confirmCancel = true;

        fixture.detectChanges();

        // Act 1
        let cancelClicked: boolean = false;
        sut.onCancel.subscribe(() => cancelClicked = true);

        let cancelButton = fixture.debugElement.nativeElement.querySelector('#cancelButton');

        let clickEvent = new Event('click');
        cancelButton.dispatchEvent(clickEvent);

        expect(cancelClicked).toBeFalsy();


        // Act 2
        let confirmButton = fixture.debugElement.nativeElement.querySelector('#confirmYes');

        confirmButton.dispatchEvent(clickEvent);

        expect(cancelClicked).toBeTruthy();
    });

    it('cancel does not fire if confirmation click is denied and confirming', () => {

        // Arrange
        sut.areYouSureText = 'are you sure?';
        sut.yesText = 'yes';
        sut.noText = 'no';
        sut.okText = 'ok';
        sut.cancelText = 'cancel';

        sut.okButtonIcon = 'done';
        sut.cancelButtonIcon = 'clear';

        sut.showOk = true;
        sut.showCancel = true;

        sut.confirmCancel = true;

        fixture.detectChanges();

        // Act 1
        let cancelClicked: boolean = false;
        sut.onCancel.subscribe(() => cancelClicked = true);

        let cancelButton = fixture.debugElement.nativeElement.querySelector('#cancelButton');

        let clickEvent = new Event('click');
        cancelButton.dispatchEvent(clickEvent);

        expect(cancelClicked).toBeFalsy();


        // Act 2
        let confirmButton = fixture.debugElement.nativeElement.querySelector('#confirmNo');

        confirmButton.dispatchEvent(clickEvent);

        expect(cancelClicked).toBeFalsy();
    });
});