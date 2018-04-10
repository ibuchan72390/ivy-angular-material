declare var require: any;

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ivy-material-expand-collapse',
    templateUrl: './expand-collapse.component.html'
})
export class IvyAngularMaterialExpandCollapseComponent {

    @Input() isCollapsed: boolean;

    @Output() onCollapse: EventEmitter<any> = new EventEmitter<any>();
    @Output() onExpand: EventEmitter<any> = new EventEmitter<any>();
}