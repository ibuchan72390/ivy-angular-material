import 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IvyPayPalModule } from '../ivy.paypal.module';

import { PayPalHelperService } from '../src/Services/paypal-helper.service';

import { PayPalCheckoutConfig } from '../src/Models/paypal-checkout-config.model';

import { PayPalCheckoutComponent } from '../src/Components/paypal-checkout.component';

describe('PayPalCheckoutComponent', () => {

    let fixture: ComponentFixture<PayPalCheckoutComponent>;
    let sut: PayPalCheckoutComponent;
    let svc: PayPalHelperService;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyPayPalModule
            ],
        });

        fixture = TestBed.createComponent(PayPalCheckoutComponent);
        sut = fixture.componentInstance;

        svc = TestBed.get(PayPalHelperService);
    });

    it('afterViewInit errors if paypalsvc init', () => {

        spyOn(svc, 'init').and.returnValue(false);
        spyOn(svc, 'createButton');

        expect(() => sut.ngAfterViewInit()).
            toThrowError('paypal is undefined! Make sure you\'ve ' +
                    'included the checkout.js script tag in your header!');

        expect(svc.init).toHaveBeenCalled();
        expect(svc.createButton).not.toHaveBeenCalled();
    });

    it('afterViewInit errors if config not init', () => {

        spyOn(svc, 'init').and.returnValue(true);
        spyOn(svc, 'createButton');

        expect(() => sut.ngAfterViewInit()).
            toThrowError('PayPalCheckoutConfig is required for paypal checkout component!');

        expect(svc.init).toHaveBeenCalled();
        expect(svc.createButton).not.toHaveBeenCalled();
    });

    it('afterViewInit creates button if all properties ready', () => {

        spyOn(svc, 'init').and.returnValue(true);
        spyOn(svc, 'createButton');

        sut.config = new PayPalCheckoutConfig();

        sut.ngAfterViewInit();

        expect(svc.init).toHaveBeenCalled();
        expect(svc.createButton).toHaveBeenCalled();
    });

});