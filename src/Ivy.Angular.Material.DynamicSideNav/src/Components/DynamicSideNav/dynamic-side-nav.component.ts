declare var require: any;

import { Component } from '@angular/core';

import { DynamicSideNavService } from '../../Services/dynamic-side-nav.service';

@Component({
    selector: 'ivy-material-dynamic-side-nav',
    templateUrl: './dynamic-side-nav.component.html',
    styleUrls: [
        './dynamic-side-nav.component.css'
    ]
})
export class MaterialDynamicSideNavComponent {

    constructor(
        public sideNavSvc: DynamicSideNavService) {
    }

    onClose(): void {
        this.sideNavSvc.setIsOpen(false);
    }

    isOpen(): boolean {
        return this.sideNavSvc.isOpen();
    }

    getMode(): string {
        return this.sideNavSvc.getSidenavMode();
    }
}