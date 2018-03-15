import { Component, Input, AfterViewInit } from '@angular/core';

import { PayPalHelperService } from '../Services/paypal-helper.service';

import { PayPalCheckoutConfig } from '../Models/paypal-checkout-config.model';


@Component({
    selector: 'ivy-paypal-checkout',
    template: '<div id="paypal-button-container"></div>'
})
export class PayPalCheckoutComponent implements AfterViewInit {

    @Input()
    config: PayPalCheckoutConfig;

    constructor(
        private paypalSvc: PayPalHelperService) {
    }

    ngAfterViewInit(): void {

        if (!this.paypalSvc.init()) {
            throw new Error('paypal is undefined! Make sure you\'ve ' +
                'included the checkout.js script tag in your header!');
        }

        if (!this.config) {
            throw new Error('PayPalCheckoutConfig is required for paypal checkout component!');
        }

        this.paypalSvc.createButton(this.config, '#paypal-button-container');
    }
}

