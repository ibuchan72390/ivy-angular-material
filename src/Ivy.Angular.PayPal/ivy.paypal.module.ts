'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

import { PayPalCheckoutComponent } from './Components/paypal-checkout.component';

// Service Collection
let declarations: any[] = [
    PayPalCheckoutComponent
];

// NgModule
@NgModule({
    declarations: declarations,
    exports: declarations
})
export class IvyPayPalModule {
}