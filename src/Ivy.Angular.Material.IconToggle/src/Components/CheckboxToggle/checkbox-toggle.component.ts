declare var require: any;

/*
 * Eventually all of our material icons should follow this pattern so they can be properly sized
 * This is just acting as a wrapper for the MaterialSizedIconComponent.
 */

import { Component, Input } from '@angular/core';

const checked: string = 'check_box';
const unchecked: string = 'check_box_outline_blank';

@Component({
    selector: 'ivy-material-checkbox-toggle',
    templateUrl: './checkbox-toggle.component.html'
})
export class IvyAngularMaterialCheckboxToggleComponent {

    @Input() checked: boolean;
    @Input() color: string;
    @Input() iconSize: string;


    getIconName(): string {

        if (this.checked) {
            return checked;
        } else {
            return unchecked;
        }
    }
}