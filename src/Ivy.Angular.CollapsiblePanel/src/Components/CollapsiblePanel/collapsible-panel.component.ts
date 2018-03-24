declare var require: any;

import { Component, Input } from '@angular/core';

import { AnimationHelper } from 'ivy.angular.animation-helpers';

@Component({
    selector: 'ivy-collapsible-panel',
    templateUrl: './collapsible-panel.component.html',
    animations: [
        AnimationHelper.genCollapse('collapse', 500)
    ]
})
export class CollapsiblePanelComponent {

    @Input() isCollapsed: boolean;
}