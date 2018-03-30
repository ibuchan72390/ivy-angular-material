import 'jasmine';

import * as tinymce from 'tinymce';

import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { IvyMaterialHelpersModule } from 'ivy.angular.material.helpers';
import { IvyWebModule } from 'ivy.angular.web';
import { IvyValueHelpersModule } from 'ivy.angular.value-helpers';

import { By } from '@angular/platform-browser'

import { IvyAngularTinyEditorInlineDirective } from '../src/Directives/tiny-editor-inline.directive';

import { IvyAngularTinyEditorInlineModule } from '../ivy.angular.tiny-editor-inline.module';
import { TinyMceConfigurationService } from '../src/Services/tiny-mce-configuration.service';
import { TinyMceInitializationService } from '../src/Services/tiny-mce-initialization.service';

describe('TinyEditorInlineDirective', () => {

    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({

            imports: [
                IvyAngularTinyEditorInlineModule,
                IvyMaterialHelpersModule,
                IvyWebModule,
                IvyValueHelpersModule
            ],
            declarations: [
                TinyMceTestComponent
            ]
        });
    });


    // Tests
    it('TinyEditorInlineDirective throws error if no elementId', () => {

        TestBed.overrideComponent(TinyMceTestComponent, {
            set: {
                template: '<input type="textarea" ivy-tiny-editor-inline />'
            }
        });

        const fixture = TestBed.createComponent(TinyMceTestComponent);
        const directiveEl = fixture.debugElement.query(By.directive(IvyAngularTinyEditorInlineDirective));
        expect(directiveEl).not.toBeNull();

        const directiveInstance: IvyAngularTinyEditorInlineDirective = directiveEl.injector.get(IvyAngularTinyEditorInlineDirective);

        expect(() => directiveInstance.ngAfterViewInit())
            .toThrow('Unable to instantiate the Inline TinyEditor without an Id on the element.');
    });

    it('TinyEditorInlineDirective throws error if elementId is blank', () => {

        TestBed.overrideComponent(TinyMceTestComponent, {
            set: {
                template: '<input type="textarea" id="" ivy-tiny-editor-inline />'
            }
        });

        const fixture = TestBed.createComponent(TinyMceTestComponent);
        const directiveEl = fixture.debugElement.query(By.directive(IvyAngularTinyEditorInlineDirective));
        expect(directiveEl).not.toBeNull();

        const directiveInstance: IvyAngularTinyEditorInlineDirective = directiveEl.injector.get(IvyAngularTinyEditorInlineDirective);

        expect(() => directiveInstance.ngAfterViewInit())
            .toThrow('Unable to instantiate the Inline TinyEditor without an Id on the element.');
    });

    it('TinyEditorInlineDirective instantiates tinyMce if !richTextDisabled', () => {

        TestBed.overrideComponent(TinyMceTestComponent, {
            set: {
                template: '<input type="textarea" id="test" ivy-tiny-editor-inline />'
            }
        });

        const fixture = TestBed.createComponent(TinyMceTestComponent);
        const directiveEl = fixture.debugElement.query(By.directive(IvyAngularTinyEditorInlineDirective));
        expect(directiveEl).not.toBeNull();

        const tinyMceSvc: TinyMceInitializationService = TestBed.get(TinyMceInitializationService);
        spyOn(tinyMceSvc, 'init');

        const tinyMceConfigSvc: TinyMceConfigurationService = TestBed.get(TinyMceConfigurationService);
        spyOn(tinyMceConfigSvc, 'generateConfigs');

        fixture.detectChanges();

        const directiveInstance: IvyAngularTinyEditorInlineDirective = directiveEl.injector.get(IvyAngularTinyEditorInlineDirective);

        expect(directiveInstance.richTextDisabled).toBe(undefined);

        expect(tinyMceSvc.init).toHaveBeenCalled();
        expect(tinyMceConfigSvc.generateConfigs).toHaveBeenCalled();
    });

    it('TinyEditorInlineDirective does not instantiate tinyMce if richTextDisabled', () => {

        TestBed.overrideComponent(TinyMceTestComponent, {
            set: {
                template: '<input type="textarea" id="test" ivy-tiny-editor-inline [richTextDisabled]="true" />'
            }
        });

        const fixture = TestBed.createComponent(TinyMceTestComponent);
        const directiveEl = fixture.debugElement.query(By.directive(IvyAngularTinyEditorInlineDirective));
        expect(directiveEl).not.toBeNull();

        const tinyMceSvc: TinyMceInitializationService = TestBed.get(TinyMceInitializationService);
        spyOn(tinyMceSvc, 'init');

        const tinyMceConfigSvc: TinyMceConfigurationService = TestBed.get(TinyMceConfigurationService);
        spyOn(tinyMceConfigSvc, 'generateConfigs');

        fixture.detectChanges();

        const directiveInstance: IvyAngularTinyEditorInlineDirective = directiveEl.injector.get(IvyAngularTinyEditorInlineDirective);

        expect(directiveInstance.richTextDisabled).toBe(true);

        expect(tinyMceSvc.init).not.toHaveBeenCalled();
        expect(tinyMceConfigSvc.generateConfigs).not.toHaveBeenCalled();
    });

    it('configureEditor sets editor and configures event', () => {

        TestBed.overrideComponent(TinyMceTestComponent, {
            set: {
                template: '<input type="textarea" id="test" ivy-tiny-editor-inline />'
            }
        });

        const fixture = TestBed.createComponent(TinyMceTestComponent);
        const directiveEl = fixture.debugElement.query(By.directive(IvyAngularTinyEditorInlineDirective));
        expect(directiveEl).not.toBeNull();

        fixture.detectChanges();

        const directiveInstance: IvyAngularTinyEditorInlineDirective = directiveEl.injector.get(IvyAngularTinyEditorInlineDirective);

        let editor: tinymce.Editor = jasmine.createSpyObj('tinymce.Editor', ['getContent', 'on', 'destroy'])

        expect(directiveInstance.editor).toBe(null);

        directiveInstance.configureEditor(editor);

        expect(directiveInstance.editor).toBe(editor);
        expect(editor.on).toHaveBeenCalledTimes(1);
    });

    it('onKeyUp gets editor content and emits', () => {

        TestBed.overrideComponent(TinyMceTestComponent, {
            set: {
                template: '<input type="textarea" id="test" ivy-tiny-editor-inline />'
            }
        });

        const editorContent = 'Contents';

        const fixture = TestBed.createComponent(TinyMceTestComponent);
        const directiveEl = fixture.debugElement.query(By.directive(IvyAngularTinyEditorInlineDirective));
        expect(directiveEl).not.toBeNull();

        fixture.detectChanges();

        const directiveInstance: IvyAngularTinyEditorInlineDirective = directiveEl.injector.get(IvyAngularTinyEditorInlineDirective);

        let editor: tinymce.Editor = jasmine.createSpyObj('tinymce.Editor', { 'on': null, 'destroy': null, 'getContent': editorContent });

        expect(directiveInstance.editor).toBe(null);

        directiveInstance.configureEditor(editor);

        expect(directiveInstance.editor).toBe(editor);
        expect(editor.on).toHaveBeenCalledTimes(1);

        let emit: string;
        directiveInstance.onTextChange.subscribe(result => emit = result);

        directiveInstance.onKeyUp();

        expect(editor.getContent).toHaveBeenCalled();
        expect(emit).toBe(editorContent);
    });

    it('ngOnDestroy skips editor method if it is not populated', () => {

        TestBed.overrideComponent(TinyMceTestComponent, {
            set: {
                template: '<input type="textarea" id="test" ivy-tiny-editor-inline />'
            }
        });

        const fixture = TestBed.createComponent(TinyMceTestComponent);
        const directiveEl = fixture.debugElement.query(By.directive(IvyAngularTinyEditorInlineDirective));
        expect(directiveEl).not.toBeNull();

        fixture.detectChanges();

        const directiveInstance: IvyAngularTinyEditorInlineDirective = directiveEl.injector.get(IvyAngularTinyEditorInlineDirective);

        expect(directiveInstance.editor).toBe(null);

        expect(() => directiveInstance.ngOnDestroy()).not.toThrow();
    });

    it('ngOnDestroy executes editor destroy method if not null', () => {

        TestBed.overrideComponent(TinyMceTestComponent, {
            set: {
                template: '<input type="textarea" id="test" ivy-tiny-editor-inline />'
            }
        });

        const fixture = TestBed.createComponent(TinyMceTestComponent);
        const directiveEl = fixture.debugElement.query(By.directive(IvyAngularTinyEditorInlineDirective));
        expect(directiveEl).not.toBeNull();

        fixture.detectChanges();

        const directiveInstance: IvyAngularTinyEditorInlineDirective = directiveEl.injector.get(IvyAngularTinyEditorInlineDirective);

        let editor: tinymce.Editor = jasmine.createSpyObj('tinymce.Editor', ['getContent', 'on', 'destroy'])

        directiveInstance.editor = editor;

        directiveInstance.ngOnDestroy();

        expect(editor.destroy).toHaveBeenCalled();
    });
});



@Component({
    selector: 'ivy-tiny-editor-inline-test',
    template: ''
})
class TinyMceTestComponent {
};