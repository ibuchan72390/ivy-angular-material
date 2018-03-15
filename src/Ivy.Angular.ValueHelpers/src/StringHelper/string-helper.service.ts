import { Injectable } from '@angular/core';

@Injectable()
export class StringHelper {

    isNullOrEmpty(data: string): boolean {
        return data == null || data == '';
    }

    randomString(): string {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

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