declare var require: any;

import { Component, Input } from '@angular/core';

@Component({
    selector: 'ivy-expanding-title-mat-card',
    templateUrl: './expanding-title-mat-card.component.html'
})
export class MaterialExpandingTitleMatCardComponent {

    @Input()
    title: string;

    private collapsed: boolean = true;


    getIconName(): string {
        if (this.collapsed) {
            return 'arrow_drop_down';
        } else {
            return 'arrow_drop_up';
        }
    }

    toggleExpand(): void {
        this.collapsed = !this.collapsed;
    }

    isExpanded(): boolean {
        return !this.collapsed;
    }
}