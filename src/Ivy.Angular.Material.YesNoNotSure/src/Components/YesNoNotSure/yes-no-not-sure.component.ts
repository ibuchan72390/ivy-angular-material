declare var require: any;

import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'ivy-material-yes-no-not-sure',
    templateUrl: './yes-no-not-sure.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MaterialYesNoNotSureComponent),
            multi: true
        }
    ]
})
export class MaterialYesNoNotSureComponent implements ControlValueAccessor {

    // Variables
    @Input() yesText: string;
    @Input() yesValue: string;

    @Input() noText: string;
    @Input() noValue: string;

    @Input() notSureText: string;
    @Input() notSureValue: string;

    // Use this instead of model binding if you need to wrap the component
    @Output() onResponse: EventEmitter<string> = new EventEmitter<string>();

    private val: string;

    private disabled: boolean;
    private _onChange: (val: any) => void;
    private _onTouched: () => void;



    // Public Methods
    getYesText(): string {
        return this.yesText;
    }
    getNoText(): string {
        return this.noText;
    }
    getNotSureText(): string {
        return this.notSureText;
    }

    isDisabled(): boolean {
        return this.disabled;
    }

    setVal(val: string): void {

        if (this.isDisabled())
            return;

        this.val = val;
        this._onChange(val);
        this.onResponse.emit(val);
    }

    onTouch(): void {
        this._onTouched();
    }

    // ControlValueAccessor
    writeValue(obj: any): void {
        this.val = obj;
    }
    registerOnChange(fn: any): void {
        this._onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this._onTouched = fn;
    }
    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}