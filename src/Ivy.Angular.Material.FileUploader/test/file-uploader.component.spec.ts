import 'jasmine';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IvyAngularMaterialFileUploaderModule } from '../ivy.angular.material.file-uploader.module'

import { MaterialFileUploaderComponent } from '../src/Components/FileUploader/file-uploader.component';

describe('FileUploaderComponent', () => {

    // Variables
    let fixture: ComponentFixture<MaterialFileUploaderComponent>;
    let sut: MaterialFileUploaderComponent;

    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                IvyAngularMaterialFileUploaderModule
            ]
        });

        fixture = TestBed.createComponent(MaterialFileUploaderComponent);
        sut = fixture.componentInstance;
    });


    // Tests
    it('fileUploaderComponent updates name and emits file if no extensions to validate', () => {

        const fname = 'test';
        const fext = 'txt';

        const filename = fname + '.' + fext;

        let file = { name: filename };

        let event = {
            target: {
                files: [
                    file
                ]
            }
        };

        let emit: any;
        sut.onFileChange.subscribe(file => emit = file);

        let errorEmit = false;
        sut.onExtensionInvalid.subscribe(() => errorEmit = true);

        sut.fileChange(event);

        expect(emit).toBe(file);
        expect(errorEmit).toBe(false);

        fixture.detectChanges();

        expect(sut.fileName).toBe(filename);
    });

    it('fileUploaderComponent updates name and emits file if extensions exist and valid', () => {

        const fname = 'test';
        const fext = 'txt';

        const filename = fname + '.' +  fext;

        const exts = [fext];

        let file = { name: filename };

        let event = {
            target: {
                files: [
                    file
                ]
            }
        };

        let emit: any;
        sut.onFileChange.subscribe(file => emit = file);

        let errorEmit = false;
        sut.onExtensionInvalid.subscribe(() => errorEmit = true);
        sut.fileExtensions = exts;

        sut.fileChange(event);

        expect(emit).toBe(file);
        expect(errorEmit).toBe(false);

        fixture.detectChanges();

        expect(sut.fileName).toBe(filename);
    });

    it('fileUploaderComponent skips name and does not emit file if extensions exist and invalid', () => {

        const fname = 'test';
        const fext = 'txt';

        const filename = fname + '.' + fext;

        const exts = ['fail'];

        let file = { name: filename };

        let event = {
            target: {
                files: [
                    file
                ]
            }
        };

        let emit: any = null;
        sut.onFileChange.subscribe(file => emit = file);

        let errorEmit = false;
        sut.onExtensionInvalid.subscribe(() => errorEmit = true);
        sut.fileExtensions = exts;

        sut.fileChange(event);

        expect(emit).toBe(null);
        expect(errorEmit).toBe(true);

        fixture.detectChanges();

        expect(sut.fileName).toBe(null);
    });

    it('fileUploaderComponent updates name if second upload is valid', () => {

        const fname1 = 'test';
        const fname2 = 'testtest';
        const fext = 'txt';

        const filename1 = fname1 + '.' + fext;
        const filename2 = fname2 + '.' + fext;

        let file1 = { name: filename1 };
        let file2 = { name: filename2 }

        let event = {
            target: {
                files: [
                    file1
                ]
            }
        };

        let emit: any = null;
        sut.onFileChange.subscribe(file => emit = file);

        let errorEmit = false;
        sut.onExtensionInvalid.subscribe(() => errorEmit = true);

        sut.fileChange(event);
        fixture.detectChanges();

        expect(emit).toBe(file1);
        expect(errorEmit).toBe(false);
        expect(sut.fileName).toBe(filename1);

        event.target.files = [file2];

        sut.fileChange(event);

        expect(emit).toBe(file2);
        expect(errorEmit).toBe(false);
        expect(sut.fileName).toBe(filename2);
    });


    it('fileUploaderComponent skips name update if second upload is invalid', () => {

        const fname1 = 'test1';
        const validExt = 'txt';

        const fname2 = 'test2';
        const invalidExt = 'fail';

        const ext = [validExt];

        const filename1 = fname1 + '.' + validExt;
        const filename2 = fname2 + '.' + invalidExt;

        let file1 = { name: filename1 };
        let file2 = { name: filename2 };

        let event = {
            target: {
                files: [
                    file1
                ]
            }
        };

        let emit: any = null;
        sut.onFileChange.subscribe(file => emit = file);

        let errorEmit = false;
        sut.onExtensionInvalid.subscribe(() => errorEmit = true);

        sut.fileExtensions = ext;

        sut.fileChange(event);
        fixture.detectChanges();

        expect(emit).toBe(file1);
        expect(errorEmit).toBe(false);
        expect(sut.fileName).toBe(filename1);

        event.target.files = [file2];

        sut.fileChange(event);

        expect(emit).toBe(file1);
        expect(errorEmit).toBe(true);
        expect(sut.fileName).toBe(filename1);
    });

    it('disabled removes functionality from the file-input element', () => {

        sut.disabled = false;

        fixture.detectChanges();

        let inputElem = fixture.debugElement.nativeElement.querySelector('input');

        expect(inputElem.disabled).toBe(sut.disabled);

        sut.disabled = true;

        fixture.detectChanges();

        inputElem = fixture.debugElement.nativeElement.querySelector('input');

        expect(inputElem.disabled).toBe(sut.disabled);
    });
});