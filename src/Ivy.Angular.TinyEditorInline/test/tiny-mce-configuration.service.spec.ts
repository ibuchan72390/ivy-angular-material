import 'jasmine';

import { TestBed } from '@angular/core/testing';
import * as tinymce from 'tinymce';

import { IvyWebModule } from 'ivy.angular.web';
import { MaterialsWidthHelper, IvyMaterialHelpersModule } from 'ivy.angular.material.helpers';
import { IvyAngularTinyEditorInlineModule } from '../ivy.angular.tiny-editor-inline.module';
import { TinyMceConfigurationService } from '../src/Services/tiny-mce-configuration.service';

describe('TinyMceConfigurationService', () => {

    // Varaiblees & Constants
    let sut: TinyMceConfigurationService;


    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularTinyEditorInlineModule,
                IvyMaterialHelpersModule.forRoot(),
                IvyWebModule
            ]
        });

        sut = TestBed.get(TinyMceConfigurationService);
    });


    // Tests
    it('generateConfigs assigns values for inputs as expected', () => {

        let widthHelper = TestBed.get(MaterialsWidthHelper);
        spyOn(widthHelper, 'isXs').and.returnValue(false);

        let elementId = 'elementId';
        let cssLocation = './test.css';
        let plugins = 'plugin test';
        let setupFn: (editor: tinymce.Editor) => void = (editor: tinymce.Editor) => {
            console.log('Setup Fn');
        };

        let result = sut.generateConfigs(elementId, cssLocation, plugins, setupFn);

        expect(result.selector).toBe('#' + elementId);
        expect(result.inline).toBe(true);
        expect(result.insert_toolbar).toBe('');
        expect(result.content_css).toBe(cssLocation);
        expect(result.plugins).toBe(plugins);
        expect(result.setup).toBe(setupFn);
        expect(result.theme).toBe(undefined);
    });

    it('generateConfigs assigngs theme as inlite if matWidthHelper isXs()', () => {

        let widthHelper = TestBed.get(MaterialsWidthHelper);
        spyOn(widthHelper, 'isXs').and.returnValue(true);

        let elementId = 'elementId';
        let cssLocation = './test.css';
        let plugins = 'plugin test';
        let setupFn: (editor: tinymce.Editor) => void = (editor: tinymce.Editor) => {
            console.log('Setup Fn');
        };

        let result = sut.generateConfigs(elementId, cssLocation, plugins, setupFn);

        expect(result.selector).toBe('#' + elementId);
        expect(result.inline).toBe(true);
        expect(result.insert_toolbar).toBe('');
        expect(result.content_css).toBe(cssLocation);
        expect(result.plugins).toBe(plugins);
        expect(result.setup).toBe(setupFn);
        expect(result.theme).toBe('inlite');
    });

});