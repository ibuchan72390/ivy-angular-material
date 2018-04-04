declare var require: any;

import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { CollectionHelper } from 'ivy.angular.value-helpers';

const borderStar: string = 'star_border';
const filledStar: string = 'star';

@Component({
    selector: 'ivy-material-star-rating',
    templateUrl: './star-rating.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MaterialStarRatingComponent),
            multi: true
        }
    ]
})
export class MaterialStarRatingComponent implements ControlValueAccessor {

    @Input() max: number;

    value: number;

    private onChange: (_: any) => void;
    private onTouch: () => void;
    private disabled: boolean;


    constructor(
        private coll: CollectionHelper) {
    }


    setValue(val: number): void {

        if (!this.disabled) {

            this.value = val;
            this.onChange(val);
        }
    }

    getEnumerationArray(): number[] {
        let arr: number[] = [];
        for (var i = 0; i < this.max; i++) {
            arr.push(i + 1);
        }
        return arr;
    }

    getIconString(index: number): string {

        if (index <= this.value) {
            return filledStar;
        } else {
            return borderStar;
        }
    }

    getIconColor(): string {

        if (this.disabled) {
            return '';
        } else {
            return 'accent';
        }
    }

    getDisabled(): boolean {

        return this.disabled;
    }

    touched(): void {
        this.onTouch();
    }

    // Control Value Accessor Methods
    writeValue(obj: any): void {
        this.value = obj;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    setDisabledState(isDisabled: boolean): void{
        this.disabled = isDisabled;
    }
}