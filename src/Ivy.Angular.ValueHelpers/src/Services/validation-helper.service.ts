import { Injectable } from '@angular/core';

import { StringHelper } from './string-helper.service';

@Injectable()
export class ValidationHelper {

    constructor(
        private stringHelper: StringHelper) {
    }

    stringIsNotNullOrEmpty(input: string, err: string): void {

        if (this.stringHelper.isNullOrEmpty(input)) {

            throw err;
        }
    }
}