declare var require: any;

import { Component, Input } from '@angular/core';

@Component({
    selector: 'ivy-material-counter-icon',
    templateUrl: './counter-icon.component.html',
    styles: [`

.counter {
    position: absolute;
    font-size: 12px;
    background-color:red;
    width: 18px;
    height: 18px;
    border-radius: 18px;
    top: 0px;
    left: 5px;
    cursor: pointer;
 }

`]
})
export class MaterialCounterIconComponent {

    @Input()
    icon: string;

    @Input()
    counter: number;

    showCounter(): boolean {
        return this.counter > 0;
    }
}