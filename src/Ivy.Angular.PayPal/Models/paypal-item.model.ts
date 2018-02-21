export class PayPalItem {

    constructor(
        public name: string,
        public sku: number,
        public price: number,
        public currency: string,
        public quantity: number) {
    }
}