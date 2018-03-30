import { Injectable } from '@angular/core';

import * as tinymce from 'tinymce';

import { MaterialsWidthHelper } from 'ivy.angular.material.helpers';

@Injectable()
export class TinyMceConfigurationService {

    constructor(
        private matWidthHelper: MaterialsWidthHelper) {
    }


    generateConfigs(elementId: string, cssLocation: string, plugins: string,
        setupFn: (editor: tinymce.Editor) => void): tinymce.Settings {

        let tinyMceConfig: tinymce.Settings = {
            selector: '#' + elementId,
            inline: true,
            insert_toolbar: '',
            content_css: cssLocation,  // resolved to http://domain.mine/mycontent.css
            plugins: plugins,
            setup: setupFn
        };

        if (this.matWidthHelper.isXs()) {
            tinyMceConfig.theme = 'inlite';
        }

        return tinyMceConfig;
    }
}