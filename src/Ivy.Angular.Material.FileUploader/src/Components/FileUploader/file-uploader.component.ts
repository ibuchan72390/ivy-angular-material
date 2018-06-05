declare var require: any;

import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'ivy-material-file-uploader',
    templateUrl: './file-uploader.component.html',
    styles: [`

input[type="file"] {
    display: none;
}

.custom-file-upload {
    display: inline-block;
    cursor: pointer;
    float: left;
}

`]
})
export class MaterialFileUploaderComponent {

    /*
     * We have a couple of options here that we can do...
     * Either we can have this directly save leveraging a file uploader
     * Or we can have this as a simple return process that allows someone else to save
     * The latter probably makes a little bit more senese...
     */

    fileName: string = null;

    @Input() fileExtensions: string[] = null;
    @Input() sizeLimitBytes: number = null;
    @Input() disabled: boolean;

    @Output() onFileChange: EventEmitter<any> = new EventEmitter<any>();
    @Output() onExtensionInvalid: EventEmitter<void> = new EventEmitter<void>();
    @Output() onSizeLimitInvalid: EventEmitter<void> = new EventEmitter<void>();



    // I have no idea what TypeScript model is supposed to be used here...
    // I like to use noImplicitAny, but I can't unless we know what this param model is
    fileChange(file: any): void {

        let newFile: File;

        if (file.dataTransfer) {
            newFile = file.dataTransfer.files[0];
        } else {
            newFile = file.target.files[0];
        }


        let fName = newFile.name;

        let fileParts = fName.split('.');
        let extension = fileParts[fileParts.length - 1].toLowerCase();

        // Only validate the file extensions if we have provided them
        // Otherwise, no extension validation is necessary
        // Don't want to restrict submission extensions at this point in time
        if (this.fileExtensions != null) { 

            let lowerFileExtensions = this.fileExtensions.map(val => val.toLowerCase());

            if (lowerFileExtensions.indexOf(extension) == -1) {

                this.onExtensionInvalid.emit();

                return;
            }

        }

        if (this.sizeLimitBytes != null) {

            if (newFile.size > this.sizeLimitBytes) {

                this.onSizeLimitInvalid.emit();

                return;
            }
        }

        this.fileName = fName;

        this.onFileChange.emit(newFile);
    }
}