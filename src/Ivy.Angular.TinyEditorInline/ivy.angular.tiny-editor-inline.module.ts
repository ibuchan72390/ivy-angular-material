'use strict';

// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';

import { TinyMceConfigurationService } from './src/Services/tiny-mce-configuration.service';
import { TinyMceInitializationService } from './src/Services/tiny-mce-initialization.service';
import { IvyAngularTinyEditorInlineDirective } from './src/Directives/tiny-editor-inline.directive';

// Service Collection
let imports: any[] = [
];

let providers: any[] = [
    // These need to exist at the forRoot level
    // These should exist as global application services
    TinyMceConfigurationService,
    TinyMceInitializationService
];

let declarations: any[] = [
    IvyAngularTinyEditorInlineDirective
];

// NgModule
@NgModule({
    imports: imports,
    providers: providers,
    declarations: declarations,
    exports: declarations
})
export class IvyAngularTinyEditorInlineModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IvyAngularTinyEditorInlineModule,
            providers: providers
        };
    }
}