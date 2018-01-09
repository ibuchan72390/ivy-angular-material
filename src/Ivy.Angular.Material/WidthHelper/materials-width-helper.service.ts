import { Injectable, HostListener } from '@angular/core';

@Injectable()   
export class MaterialsWidthHelper {

    private windowWidth: number;

    constructor() {

        // Setup our default value, appears this is undefined to start
        this.windowWidth = window.innerWidth;

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
        return this.isWindowUnderWidth(960);
    }

    isMd(): boolean {
        return this.isWindowUnderWidth(1280);
    }

    isLg(): boolean {
        return this.isWindowUnderWidth(1920);
    }

    isXl(): boolean {
        return window.innerWidth > 1920;
    }

    private isWindowUnderWidth(width: number): boolean {
        return window.innerWidth <= width;
    }
}