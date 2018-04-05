/**
 * Running into a huge issue when going across devices into Apple land.
 * It seems that no matter what we do, we're unable to play videos.
 * Upon further investigation, it appears the loadeddata event never actually fires.
 * Explained by the following:
 * https://stackoverflow.com/questions/33300294/html5-video-loadeddata-event-does-not-work-in-ios-safari
 */

import { Directive, ElementRef, Renderer } from '@angular/core';
import { OsDetectionService } from 'ivy.angular.web';

@Directive({
    selector: '[mac-mobile-autoplay]'
})
export class MacMobileAutoPlayDirective {

    constructor(
        el: ElementRef,
        renderer: Renderer,
        osDetector: OsDetectionService) {

        if (osDetector.isMac()) {

            // Seemingly should use autoplay="autoplay"
            // https://www.w3schools.com/tags/att_video_autoplay.asp
            renderer.setElementAttribute(el.nativeElement, 'autoplay', 'autoplay');
        }
    }
}