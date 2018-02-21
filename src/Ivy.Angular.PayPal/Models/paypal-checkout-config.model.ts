import { PayPalCheckoutClientIds } from './paypal-checkout-client-ids.model';

export class PayPalCheckoutConfig {

    payment: (data: any, actions: any) => any;
    onAuthorize: (data: any, actions: any) => any;
    env: string; // 'sandbox' or 'production'
    commit: boolean;
    client: PayPalCheckoutClientIds;
}