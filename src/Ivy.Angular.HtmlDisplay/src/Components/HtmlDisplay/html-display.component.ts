import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

/*
 * This is an EXTREMELY dangerous Component, you absolutely MUST understand
 * how and when to use this because of the getHTML method. Since that bypasses,
 * the traditional HTML sanitization, it's possible to allow for XSS attacks.
 *
 * As long as we only use this to render text that came directly out of our
 * rich-editor, then we will be fine; however, we should NEVER use this to
 * display HTML from any 3rd party source.  Even then, this opens up the 
 * possibility of XSS attacks from administrators.
 *
 */

@Component({
    selector: 'ivy-html-display',
    template: '<div class="htmlContainer" #htmlContainer></div>'
})
export class HtmlDisplayComponent implements OnInit {

    @Input() html: string;

    @ViewChild('htmlContainer') htmlContainer: ElementRef;

    // https://stackoverflow.com/questions/31548311/angular-2-html-binding
    // The below allows for inline styling to be applied in the div HTML
    ngOnInit(): void {
        this.htmlContainer.nativeElement.innerHTML = this.html;
    }
}