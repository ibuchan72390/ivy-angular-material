import 'jasmine';

import { BaseEntity, BaseEnumEntity } from 'ivy.angular.data';

import { CollectionHelper } from '../src/Services/collection-helper.service';

describe('CollectionHelper', () => {

    // Variables & Constantss
    let sut: CollectionHelper;

    // Setup
    beforeEach(() => sut = new CollectionHelper());


    // range
    it('range properly creates array of numbers of desired length starting from 0', () => {

        const count: number = 5;

        let result = sut.range(count);

        for (var i = 0; i < count; i++) {
            expect(result[i]).toBe(i);
        }
    });

    it('range properly creates array of numbers of desired length starting from alternate start', () => {

        const count: number = 5;
        const start: number = 10;

        let result = sut.range(count, start);

        for (var i = 0; i < count; i++) {
            expect(result[i]).toBe(i + start);
        }
    });


    // max
    it('max returns max value from collection', () => {

        let count = 10;

        let vals = Array.from(new Array(count).keys()).
            map((val, index) => index);

        // subtract 1 for zero-based indexing
        expect(sut.max(vals)).toBe(count - 1);
    });

    // maxDate
    it('maxDate returns max date from collection', () => {

        let count = 10;

        let vals: Date[] = Array.from(new Array(count).keys()).
            map((val, index) => index).
            map(val => new Date(100000 * val));

        // subtract 1 for zero-based indexing
        expect(sut.maxDate(vals)).toBe(vals[count - 1]);
    });

    // min
    it('min returns min value from collection', () => {

        let count = 10;

        let vals = Array.from(new Array(count).keys()).
            map((val, index) => index);

        expect(sut.min(vals)).toBe(0);
    });

    // minDate
    it('minDate returns min date from collection', () => {

        let count = 10;

        let vals: Date[] = Array.from(new Array(count).keys()).
            map((val, index) => index).
            map(val => new Date(100000 * val));

        // subtract 1 for zero-based indexing
        expect(sut.minDate(vals)).toBe(vals[0]);
    });

    // firstOrDefault
    it('firstOrDefault returns null if length is 0', () => {
        let arr: number[] = [];

        expect(sut.firstOrDefault(arr)).toBe(null);
    });

    it('firstOrDefault returns first if length is greater than 0', () => {
        let arr: number[] = [1,2,3];

        expect(sut.firstOrDefault(arr)).toBe(arr[0]);
    });

    // remove
    it('remove eliminates item from array', () => {

        let arr: number[] = [1,2,3];

        sut.remove(arr, 2);

        expect(arr.length).toBe(2);
        expect(arr[0]).toBe(1);
        expect(arr[1]).toBe(3);
    });


    // getEntityById
    it('getEntityByIdFromList returns entity with matching id', () => {
        const count = 10;
        let arr = Array.from(new Array(count).keys()).
            map((val, index) => index).
            map(x => {
                let entity = new TestEntity();
                entity.id = x;
                return entity;
            });

        let result = sut.getEntityById(arr, count - 1);

        expect(result.id).toBe(count - 1);
    });

});


class TestEntity extends BaseEntity {

}

class TestEnumEntity extends BaseEnumEntity {

}