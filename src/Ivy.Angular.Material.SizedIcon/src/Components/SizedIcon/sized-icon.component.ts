declare var require: any;

import { Component, Input } from '@angular/core';

/**
 * This seems stupid, but sizing these damn things does not properly "size" them because of the inherent styling of the height and width
 * We need to set the size, the height, and the width all in order to ensure it renders correctly
 */

@Component({
    selector: 'ivy-material-sized-icon',
    template: '<mat-icon [style.font-size]="iconSize" [style.height]="iconSize" [style.width]="iconSize" color="{{iconColor}}">{{iconName}}</mat-icon>'
})
export class MaterialSizedIconComponent {

    @Input()
    iconName: string;

    @Input()
    iconColor: string;

    @Input()
    iconSize: string;
}