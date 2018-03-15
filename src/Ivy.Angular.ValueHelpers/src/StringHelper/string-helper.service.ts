import { Injectable } from '@angular/core';

import { MathHelper } from '../MathHelper/math-helper.service';

@Injectable()
export class StringHelper {

    constructor(
        private math: MathHelper) {

    }

    isNullOrEmpty(data: string): boolean {
        return data == null || data == '';
    }

    randomString(): string {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(this.math.floor(this.math.random() * possible.length));

        return text;
    }

    randomIfNullOrEmpty(evalString: string): string {

        if (this.isNullOrEmpty(evalString)) {
            return this.randomString();
        } else {
            return evalString;
        }
    }
}