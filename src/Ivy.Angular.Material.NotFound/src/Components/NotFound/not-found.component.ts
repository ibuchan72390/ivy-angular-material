declare var require: any;

import { Component, Input } from '@angular/core';

@Component({
    selector: 'ivy-material-not-found',
    templateUrl: './not-found.component.html'
})
export class MaterialNotFoundComponent {

    @Input()
    textOverride: string;

    showStandardText(): boolean {
        return this.textOverride == null;
    }

    showTextOverride(): boolean {
        return this.textOverride != null;
    }
}