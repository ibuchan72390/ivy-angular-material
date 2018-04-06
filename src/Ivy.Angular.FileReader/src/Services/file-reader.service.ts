import { Injectable } from '@angular/core';

import { Observable, Observer } from 'rxjs';

@Injectable()
export class FileReaderService {

    reader: FileReader = new FileReader();

    fileToBase64String(file: any): Observable<string> {

        return Observable.create((observer: Observer<any>) => {

            this.reader.addEventListener("load", (e: any) => {

                let result: any;

                // Appears this may come through in one of two separate places
                // https://stackoverflow.com/questions/27254735/filereader-onload-with-result-and-parameter
                if (e.result) {
                    result = e.result;
                } else {
                    result = e.target.result;
                }

                observer.next(result);
                observer.complete();
            });

            this.reader.readAsDataURL(file);
        });

    }
}