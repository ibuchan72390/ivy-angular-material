import { Injectable } from '@angular/core';

import { MaterialsWidthHelper } from 'ivy.angular.material.helpers';

@Injectable()
export class DynamicSideNavService {

    // Variables
    internalIsOpen: boolean = false;
    prevUseSide: boolean = false;


    // Constructor
    constructor(
        private widthHelper: MaterialsWidthHelper) {

        /*
         * We don't want the side nav to default to open
         * if the screen is smaller than the md sizing
         */
        this.internalIsOpen = this.useSide();
    }


    // Public Methods
    isOpen(): boolean {

        // If useSide === true, then !this.isSm() == true
        //if (this.useSide() && !this.widthHelper.isSm()) {
        if (this.useSide()) {
            return true;
        } else {
            return this.internalIsOpen;
        }
    }

    setIsOpen(open: boolean): void {
        this.internalIsOpen = open;
    }

    toggleNav(): void {
        /*
         * When working with SideNav mode Over,
         * you never truly "close" the nav via the toggle
         * as such, we need to double-click the toggle.
         * This will prevent, the toggle double-click.
         */

        //if (this.getSidenavMode() == 'over') {
        if (!this.useSide()) {
            this.internalIsOpen = true;
        } else {
            this.internalIsOpen = !this.internalIsOpen;
        }
    }

    getSidenavMode() {
        if (this.useSide()) {
            return 'side';
        } else {
            return 'over';
        }
    }

    useSide(): boolean {

        var useSide = (!this.widthHelper.isSm() && !this.widthHelper.isXs());

        if (useSide != this.prevUseSide) {
            this.internalIsOpen = !this.internalIsOpen;
            this.prevUseSide = useSide;
        }

        return useSide;
    }
}