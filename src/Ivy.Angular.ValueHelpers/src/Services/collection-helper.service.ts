import { Injectable } from '@angular/core';

import { BaseEntity } from 'ivy.angular.data';
import { BaseEnumEntity } from 'ivy.angular.data';

@Injectable()
export class CollectionHelper {

    max(col: number[]): number {

        return this.internalMax<number>(col);
    }

    maxDate(col: Date[]): Date {

        return this.internalMax<Date>(col);
    }

    min(col: number[]): number {

        return this.internalMin<number>(col);
    }

    minDate(col: Date[]): Date {

        return this.internalMin<Date>(col);
    }

    firstOrDefault<T>(col: T[]): T {

        if (col.length == 0) {
            return null;
        } else {
            return col[0];
        }
    }

    remove<T>(coll: T[], item: T): void {
        coll.splice(coll.indexOf(item), 1);
    }

    getEntityById<T extends BaseEntity>(coll: T[], id: number): T {

        for (var i = 0; i < coll.length; i++) {
            if (coll[i].id == id) {
                return coll[i];
            }
        }

        return null;
    }

    getEnumEntityByName<T extends BaseEnumEntity>(coll: T[], name: string): T {

        for (var i = 0; i < coll.length; i++) {
            if (coll[i].name == name) {
                return coll[i];
            }
        }

        return null;
    }

    removeEntity<T extends BaseEntity>(coll: T[], item: T): void {

        for (var i = 0; i < coll.length; i++) {

            if (coll[i].id == item.id) {

                coll.splice(i, 1);
                return;
            }
        }
    }

    containsEntity<T extends BaseEntity>(coll: T[], item: T): boolean {

        for (var i = 0; i < coll.length; i++) {

            if (coll[i].id == item.id) {

                return true;
            }
        }

        return false;
    }

    addOrRemoveEntity<T extends BaseEntity>(coll: T[], item: T): void {

        if (this.containsEntity(coll, item)) {
            this.removeEntity(coll, item);
        } else {
            coll.push(item);
        }
    }


    private internalMax<T>(col: T[]): T {

        if (col.length == 0) return null;

        let max = col[0];

        for (var i = 0; i < col.length; i++) {

            if (col[i] > max)
                max = col[i];
        }

        return max;
    }

    private internalMin<T>(col: T[]): T {

        if (col.length == 0) return null;

        let min = col[0];

        for (var i = 0; i < col.length; i++) {

            if (col[i] < min)
                min = col[i];
        }

        return min;
    }
}