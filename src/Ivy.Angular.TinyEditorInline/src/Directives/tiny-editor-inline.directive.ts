declare var require: any;

// ./app/shared/hidden.directive.ts
import { Directive, Input, HostBinding, OnInit, OnDestroy, AfterViewInit, ElementRef, Output, EventEmitter } from '@angular/core';

// TinyMCE JS Imports
/*
 * Note, this library is loaded via the CDN in order to prevent issues we're dealing with from setting up the skin directory
 * Currently, the skin directory is unable to be loaded into the webpack final product correctly.
 * As such, by relying on the CDN, it gets loaded with all of the appropriate assets and we don't have to worry about messing
 * with some crazy custom webpack configuration to get it loaded into our application.
 */


// My Services
import { MaterialsWidthHelper } from 'ivy.angular.material.helpers';
import { StringHelper } from 'ivy.angular.value-helpers';

import { TinyMceInitializationService } from '../Services/tiny-mce-initialization.service';
import { TinyMceConfigurationService } from '../Services/tiny-mce-configuration.service';

import * as tinymce from 'tinymce';

//var cssFileLocation = require('file-loader!../../../../site.css');


@Directive({ selector: '[ivy-tiny-editor-inline]' })
export class IvyAngularTinyEditorInlineDirective implements OnDestroy, AfterViewInit {

    @Input() richTextDisabled: boolean;

    @Input() cssLocation: string;
    @Input() plugins: string;

    @Output() onTextChange = new EventEmitter();

    private elementId: string;

    editor: tinymce.Editor = null;

    constructor(
        private elemRef: ElementRef,
        private stringHelper: StringHelper,
        private matWidthHelper: MaterialsWidthHelper,
        private tinymceSvc: TinyMceInitializationService,
        private tinyMceConfigSvc: TinyMceConfigurationService) {
    }

    ngAfterViewInit() {

        this.elementId = this.elemRef.nativeElement.id;

        if (this.stringHelper.isNullOrEmpty(this.elementId)) {
            throw 'Unable to instantiate the Inline TinyEditor without an Id on the element.';
        }

        if (!this.richTextDisabled) {

            let tinyMceConfig = this.tinyMceConfigSvc.generateConfigs(this.elementId, this.cssLocation,
                this.plugins, (editor: tinymce.Editor) => this.configureEditor(editor));

            this.tinymceSvc.init(tinyMceConfig);
        }
    }

    ngOnDestroy() {

        if (this.editor != null) { 
            this.editor.destroy();
        }
    }

    configureEditor(editor: tinymce.Editor): void {

        this.editor = editor;

        editor.on('keyup change', () => this.onKeyUp);
    }

    onKeyUp(): void {
        const content = this.editor.getContent();
        this.onTextChange.emit(content);
    }
}
