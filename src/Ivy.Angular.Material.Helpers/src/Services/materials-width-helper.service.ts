import { Injectable, HostListener } from '@angular/core';

import { WindowRefService } from 'ivy.angular.web';

@Injectable()   
export class MaterialsWidthHelper {

    constructor(
        private windowRef: WindowRefService) {

        // Doesn't appear we can use HostListener in a service correctly
        // http://stackoverflow.com/questions/39592972/is-it-possible-to-use-hostlistener-in-a-service
    }


    /*
     * All numbers for this service has been derived from the Materials Design Specification
     * They should accurately represent the Materials Design Interpretation of screen sizes
     * https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints
     *
     * xs: < 480px
     * sm: < 960px
     * md: < 1280px
     * lg: < 1920px
     * xl: > 1920px
     */

    isXs(): boolean {
        return this.isWindowUnderWidth(480);
    }

    isSm(): boolean {
        return this.isWindowBetween(480, 960);
    }

    isMd(): boolean {
        return this.isWindowBetween(960, 1280);
    }

    isLg(): boolean {
        return this.isWindowBetween(1280, 1920);
    }

    isXl(): boolean {
        return this.isWindowOverWidth(1920);
    }

    /*
     * The following items have been expanded based on some weirdness we're seeing with @angular/material
     * essentially, some of their breakpoints are operating outside of the above.  As such, attempts to identify
     * the above are not accurate enough.  To allow for us to hit all of the other ranges, appropriately,
     * these methods have been created based on the following:
     * https://material.io/design/layout/responsive-layout-grid.html#breakpoints
     */

    isBelow359(): boolean {
        return this.isWindowUnderWidth(359);
    }

    is360to399(): boolean {
        return this.isWindowBetween(359, 399);
    }

    is400to479(): boolean {
        return this.isWindowBetween(399, 479);
    }

    is480to599(): boolean {
        return this.isWindowBetween(479, 599);
    }

    is600to719(): boolean {
        return this.isWindowBetween(599, 719);
    }

    is720to839(): boolean {
        return this.isWindowBetween(719, 839);
    }

    is840to959(): boolean {
        return this.isWindowBetween(839, 959);
    }

    is960to1023(): boolean {
        return this.isWindowBetween(959, 1023);
    }

    is1024to1279(): boolean {
        return this.isWindowBetween(1023, 1279);
    }

    is1280to1439(): boolean {
        return this.isWindowBetween(1279, 1439);
    }

    is1440to1599(): boolean {
        return this.isWindowBetween(1439, 1599);
    }

    is1600to1919(): boolean {
        return this.isWindowBetween(1599, 1919);
    }

    isAbove1920(): boolean {
        return this.isWindowOverWidth(1919);
    }


    private isWindowUnderWidth(width: number): boolean {
        return this.windowRef.nativeWindow.innerWidth <= width;
    }

    private isWindowOverWidth(width: number): boolean {
        return this.windowRef.nativeWindow.innerWidth > width;
    }

    private isWindowBetween(lowWidth: number, highWidth: number): boolean {
        return this.isWindowUnderWidth(highWidth) &&
               this.isWindowOverWidth(lowWidth);
    }
}