declare var require: any;

import { Component, ViewChild, ElementRef, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { RegexValidators } from 'ivy.angular.regex-validators';

@Component({
    selector: 'ivy-material-image-href-input',
    templateUrl: './image-href-input.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MaterialImageHrefInputComponent),
            multi: true
        }
    ],
    styles: [
        `

.full-width {
    width: 100%;
}

`
    ]
})
export class MaterialImageHrefInputComponent {

    previewImage: boolean;
    urlValidator: RegExp;

    @ViewChild('hrefTextBox')
    textbox: ElementRef;

    @Input()
    formControlName: string;

    @Input()
    previewText: string;

    @Input()
    placeholder: string;

    private onChangeFn: any;
    private onTouchedFn: any;


    constructor() {

        // Assign it here so we can override it in testing
        // We can't really mock it otherwise
        this.urlValidator = RegexValidators.url;
    }


    onBlur(): void {
        this.onTouchedFn();
    }

    onChange(): void {
        this.onChangeFn(this.getCurrentValue());
    }

    getCurrentValue(): string {
        return this.textbox.nativeElement.value;
    }

    previewDisabled(): boolean {
        return !this.urlValidator.test(this.getCurrentValue());
    }


    // ControlValueAccessor
    writeValue(obj: any): void {

        let objType = typeof obj;

        if (objType != 'string') return;

        this.textbox.nativeElement.value = obj;
    }

    registerOnChange(fn: any): void {
        this.onChangeFn = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouchedFn = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.textbox.nativeElement.disabled = isDisabled;
    }
}