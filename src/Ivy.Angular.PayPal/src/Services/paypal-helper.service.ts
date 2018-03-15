import { PayPalCheckoutConfig } from '../Models/paypal-checkout-config.model'

declare const paypal: any;

export class PayPalHelperService {

    init(): boolean {

        return !!paypal;
    }

    createButton(config: PayPalCheckoutConfig, elementQuery: string): void {

        setTimeout(() => {
            paypal.Button.render(config, elementQuery);
        });
    }
}