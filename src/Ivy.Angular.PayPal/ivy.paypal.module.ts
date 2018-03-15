'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

import { PayPalHelperService } from './src/Services/paypal-helper.service';

import { PayPalCheckoutComponent } from './src/Components/paypal-checkout.component';

// Service Collection
let declarations: any[] = [
    PayPalCheckoutComponent
];

let providers: any[] = [
    PayPalHelperService
];

// NgModule
@NgModule({
    declarations: declarations,
    exports: declarations,
    providers: providers
})
export class IvyPayPalModule {
}