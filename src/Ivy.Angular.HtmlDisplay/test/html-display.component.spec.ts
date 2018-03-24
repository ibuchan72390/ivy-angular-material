import 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';

import { IvyAngularHtmlDisplayModule } from '../ivy.angular.html-display.module';

import { HtmlDisplayComponent } from '../src/Components/HtmlDisplay/html-display.component';

describe('HtmlDisplayComponent', () => {

    // Variables & Constants
    let fixture: ComponentFixture<HtmlDisplayComponent>;
    let sut: HtmlDisplayComponent;


    // SetUp
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                IvyAngularHtmlDisplayModule
            ]
        });

        fixture = TestBed.createComponent(HtmlDisplayComponent);
        sut = fixture.componentInstance;
    });


    // Tests
    it('HtmlDisplayComponent displays formatted html', () => {

        const txt = 'TESTING';
        const html = '<h1>' +  txt + '</h1>';

        sut.html = html;

        sut.ngOnInit();

        fixture.detectChanges();

        expect(fixture.debugElement.nativeElement.innerText).toBe(txt);

        // Need to go child because it's wrapped in a div
        expect(fixture.debugElement.nativeElement.childNodes[0].innerHTML).toBe(html);
    });

    it('HtmlDisplayComponent does not strip inline texts', () => {

        const txt = 'TESTING';
        const fontSz = '30px';
        const html = '<span style="font-size: ' + fontSz + '">' + txt + '</span>';

        sut.html = html;

        sut.ngOnInit();

        fixture.detectChanges();

        expect(fixture.debugElement.nativeElement.innerText).toBe(txt);

        // Need to go child because it's wrapped in a div
        expect(fixture.debugElement.nativeElement.childNodes[0].innerHTML).toBe(html);
    });

});