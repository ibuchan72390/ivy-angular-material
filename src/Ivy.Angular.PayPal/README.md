# Ivy.Angular.PayPal

This library is made to allow for a simple Angular style wrapper for the following PayPal sample: https://developer.paypal.com/docs/integration/direct/express-checkout/integration-jsv4/client-side-REST-integration/

This nifty little component simply allows you to generate your props in an Angular controller and pass them to the component.  Simply ensure that you don't allow for component initialization until after your props have been configured.

### Installation

Begin by simply adding a reference to checkout.js in a script tag in your header like so:
```
<head>
    <script src="https://www.paypalobjects.com/api/checkout.js"></script>
</head>
```

Once you have the proper script for the paypal JS object, you'll need to get the package from NPM:
```
npm install ivy.angular.paypal
```
or yarn
```
yarn add ivy.angular.paypal
```

Now that we have pulled the library, we simply need to integrate the new IvyPayPalModule into our module structure.  If you're using a modularized application, import the module into your shared imports; otherwise, import into your core imports:
```
@NgModule({
    imports: [
        IvyPayPalModule,
    ]
})
export class SamplePurchaseModule { }
```

At this point, you can simply configure your props as the PayPal documentation above lays forth.  Below is a sample controller that generates the props that you need to pass to the component.
```
import { Component } from '@angular/core';

import { PayPalHelperService } from '../Services/paypal-helper.service';
import { PayPalCheckoutConfig } from 'ivy.angular.paypal';

@Component({
    selector: 'iam-checkout',
    templateUrl: './checkout.component.html'
})
export class CheckoutComponent {

    loading: boolean = true;
    config: PayPalCheckoutConfig;

    constructor(
        private paypalHelper: PayPalHelperService) {

        this.paypalHelper.generatePayPalCheckoutConfig().subscribe(
            paypalConfig => {
                this.config = paypalConfig;

                this.loading = false;
            }
        );
    }
}
```

Then, the following is our template for the above checkout component.
```
<ivy-paypal-checkout *ngIf="!loading"
                     [config]="config">
</ivy-paypal-checkout>
```

License
----

MIT

