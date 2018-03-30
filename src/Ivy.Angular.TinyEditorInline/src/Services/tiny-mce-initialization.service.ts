import { Injectable } from '@angular/core';

// Import TinyMCE
import * as tinymce from 'tinymce';

// I can't really test this library with ease
// As such, we're simply going to Mock it out from the component entirely
@Injectable()
export class TinyMceInitializationService {

    init(config: tinymce.Settings): void {

        tinymce.init(config);   
    }
}