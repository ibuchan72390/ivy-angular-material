import { Component, Input, AfterViewInit } from '@angular/core';

import { PayPalCheckoutConfig } from '../Models/paypal-checkout-config.model';

declare const paypal: any;

@Component({
    selector: 'ivy-paypal-checkout',
    template: '<div id="paypal-button-container"></div>'
})
export class PayPalCheckoutComponent implements AfterViewInit {

    @Input()
    config: PayPalCheckoutConfig;


    ngAfterViewInit(): void {

        if (!paypal) {
            throw new Error('paypal is undefined! Make sure you\'ve ' +
                'included the checkout.js script tag in your header!');
        }

        if (!this.config) {
            throw new Error('PayPalCheckoutConfig is required for paypal checkout component!');
        }

        setTimeout(() => {
            paypal.Button.render(this.config, '#paypal-button-container');
        });
    }
}

