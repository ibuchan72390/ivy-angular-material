declare var require: any;

import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Observable, Observer } from 'rxjs';

import { AnimationHelper } from 'ivy.angular.animation-helpers';

@Component({
    selector: 'ivy-material-ok-cancel',
    templateUrl: './ok-cancel.component.html',
    animations: [
        AnimationHelper.genSlideLeft('slideLeft', 500)
    ]
})
export class MaterialOkCancelComponent {

    @Input() areYouSureText: string;
    @Input() yesText: string;
    @Input() noText: string;
    @Input() okText: string;
    @Input() cancelText: string;

    @Input() okButtonIcon: string;
    @Input() cancelButtonIcon: string;

    @Input() okDisabled: boolean;
    @Input() cancelDisabled: boolean;

    @Input() showOk: boolean;
    @Input() showCancel: boolean;

    @Input() confirmOk: boolean;
    @Input() confirmCancel: boolean;

    // These could probably be merged to an onRespond = EventEmitter<boolean>
    // That would be a lot of reworking in IAGE, so I don't want to play that game right now
    // That might be a lot of frustration with the confirmation steps above though
    @Output() onOk: EventEmitter<void> = new EventEmitter<void>();
    @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();


    confirmationObservable: any;


    constructor() {

        this.okButtonIcon = 'done';
        this.cancelButtonIcon = 'clear';

        this.showOk = true;
        this.showCancel = true;
    }

    ok(): void {

        this.confirmationWrapper(this.confirmOk, () => this.onOk.emit());
    }

    cancel(): void {

        this.confirmationWrapper(this.confirmCancel, () => this.onCancel.emit());
    }

    confirming(): boolean {

        let confirming = this.confirmationObservable != null;
        return this.confirmationObservable != null;
    }

    confirmYes(): void {

        this.confirmationObservable.next();
        this.confirmationObservable.complete();
        this.confirmationObservable = null;
    }

    confirmNo(): void {

        this.confirmationObservable.error(null);
        this.confirmationObservable.complete();
        this.confirmationObservable = null;
    }

    showAreYouSure(): boolean {

        return this.confirmOk || this.confirmCancel;
    }

    private confirmationWrapper(boolSwitch: boolean, completeFn: () => void): void {

        if (boolSwitch) {

            Observable.create((observer: Observer<void>) => this.confirmationObservable = observer).subscribe(
                (confirm: void) => completeFn(),
                (err: void) => {
                    // we seem to get an exception without this placeholder
                }
            );

        } else {

            completeFn();
        }
    }
}