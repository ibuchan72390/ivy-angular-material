import { PayPalAmount } from './paypal-amount.model';
import { PayPalItemList } from './paypal-item-list.model';

export class PayPalTransaction {

    constructor(
        public amount: PayPalAmount,
        public item_list: PayPalItemList) {
    }
}