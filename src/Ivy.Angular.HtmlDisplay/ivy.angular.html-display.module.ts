import { NgModule } from '@angular/core';

import { HtmlDisplayComponent } from './src/Components/HtmlDisplay/html-display.component';

// Service Collection
let declarations: any[] = [
    HtmlDisplayComponent
];


// NgModule
@NgModule({
    declarations: declarations,
    exports: declarations
})
export class IvyAngularHtmlDisplayModule {
}