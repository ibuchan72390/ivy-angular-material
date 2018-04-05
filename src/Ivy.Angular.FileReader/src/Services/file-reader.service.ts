import { Injectable } from '@angular/core';

import { Observable, Observer } from 'rxjs';

@Injectable()
export class FileReaderService {

    reader: FileReader = new FileReader();

    fileToBase64String(file: any): Observable<string> {

        return Observable.create((observer: Observer<any>) => {

            this.reader.addEventListener("load", (e: any) => {

                observer.next(e.target.result);
                observer.complete();
            });

            this.reader.readAsDataURL(file);
        });

    }
}