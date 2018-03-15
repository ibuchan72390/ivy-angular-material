import 'jasmine';

import { PayPalHelperService } from '../src/Services/paypal-helper.service';

import { PayPalCheckoutConfig } from '../src/Models/paypal-checkout-config.model';

import { PayPalCheckoutComponent } from '../src/Components/paypal-checkout.component';

describe('PayPalCheckoutComponent', () => {

    let svc: PayPalHelperService;
    let sut: PayPalCheckoutComponent;

    beforeEach(() => {
        this.svc = new PayPalHelperService();
        this.sut = new PayPalCheckoutComponent(this.svc);
    });

    it('afterViewInit errors if paypalsvc init', () => {

        spyOn(this.svc, 'init').and.returnValue(false);
        spyOn(this.svc, 'createButton');

        expect(() => this.sut.ngAfterViewInit()).
            toThrowError('paypal is undefined! Make sure you\'ve ' +
                    'included the checkout.js script tag in your header!');

        expect(this.svc.init).toHaveBeenCalled();
        expect(this.svc.createButton).not.toHaveBeenCalled();
    });

    it('afterViewInit errors if config not init', () => {

        spyOn(this.svc, 'init').and.returnValue(true);
        spyOn(this.svc, 'createButton');

        expect(() => this.sut.ngAfterViewInit()).
            toThrowError('PayPalCheckoutConfig is required for paypal checkout component!');

        expect(this.svc.init).toHaveBeenCalled();
        expect(this.svc.createButton).not.toHaveBeenCalled();
    });

    it('afterViewInit creates button if all properties ready', () => {

        spyOn(this.svc, 'init').and.returnValue(true);
        spyOn(this.svc, 'createButton');

        this.sut.config = new PayPalCheckoutConfig();

        this.sut.ngAfterViewInit();

        expect(this.svc.init).toHaveBeenCalled();
        expect(this.svc.createButton).toHaveBeenCalled();
    });

});