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