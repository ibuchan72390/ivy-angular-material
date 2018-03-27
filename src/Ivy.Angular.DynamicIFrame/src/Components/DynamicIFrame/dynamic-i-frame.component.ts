declare var require: any;

import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { OsDetectionService, MobileDetectionService } from 'ivy.angular.web';
import { ValidationHelper } from 'ivy.angular.value-helpers';

/*
 * This component is being created because we specifically have some issues working
 * with the iFrame object on Apple devices.  There is an explicit issue with Apple in
 * which an iFrame is not scrollable within an Apple device.  The iFrame implementation
 * seemingly works fine on every other device I have encountered.
 *
 * possible fix: https://davidwalsh.name/scroll-iframes-ios
 */

@Component({
    selector: 'ivy-dynamic-iframe',
    templateUrl: './dynamic-i-frame.component.html',
    styles: [`

.scroll-wrapper {
    width: 100%;
    height: 400px;
    -webkit-overflow-scrolling: touch;
    overflow: scroll;
}

.scroll-wrapper iframe {
    height: 100%;
    width: 100%;
}

`]
})
export class DynamicIFrameComponent implements OnInit {

    @Input()
    src: string;

    safeSrc: SafeResourceUrl;

    constructor(
        private osDetector: OsDetectionService,
        private mobileDetector: MobileDetectionService,
        private sanitizer: DomSanitizer,
        private validationHelper: ValidationHelper) {
    }

    ngOnInit(): void {

        this.validationHelper.stringIsNotNullOrEmpty(this.src,
            'DynamicIFrame must have src before it is initialized!');

        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.src);
    }

    useCustomIFrame(): boolean {

        // We should check isMac && isMobile here
        // Either that or we can go isIPad || isIPhone

        // Desktop Mac should NOT see this issue to the best of my memory
        //return this.osDetector.isMac();

        if (this.osDetector.isMac()) {

            if (this.mobileDetector.isMobile()) {
                return true;
            }
        }

        return false;
    }
}