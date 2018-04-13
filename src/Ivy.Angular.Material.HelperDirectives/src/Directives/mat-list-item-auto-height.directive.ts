// ./app/shared/hidden.directive.ts
import { Directive, ElementRef, Renderer, OnInit } from '@angular/core';

import { ChildNodeHelperService } from '../Services/child-node-helper.service';

@Directive({ selector: '[ivy-mat-list-item-auto-height]' })
export class MatListItemAutoHeightDirective implements OnInit {

    private firstChildClass: string = 'mat-list-item-content';

    // This allows for a one-time setup of the current theme.
    // We're not editing it dynamically through here, but we can def load and set to a configuration value
    constructor(
        private el: ElementRef,
        private renderer: Renderer,
        private nodeHelper: ChildNodeHelperService) {
    }

    ngOnInit() {

        var firstChildNode = this.nodeHelper.findChildNodeByClass(this.el.nativeElement, this.firstChildClass);

        this.renderer.setElementStyle(firstChildNode, 'height', 'auto');
    }
}
