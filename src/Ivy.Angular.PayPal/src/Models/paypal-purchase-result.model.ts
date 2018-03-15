import { PayPalTransaction } from './paypal-transaction.model';

export class PayPalPurchaseResult {

    constructor(
        public cart: string,
        public create_time: string,
        public id: string,
        public state: string,
        public transactions: PayPalTransaction[]) {
    }
}