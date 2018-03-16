import { Injectable } from '@angular/core';

@Injectable()
export class MathHelper {

    random(): number {
        return Math.random();
    }

    floor(val: number): number {
        return Math.floor(val);
    }
}