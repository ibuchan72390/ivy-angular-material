import 'jasmine';

import { MathHelper } from '../src/Services/math-helper.service';


describe('MathHelper', () => {

    // Variables & Constants
    let sut: MathHelper;

    // Setup
    beforeEach(() => sut = new MathHelper());


    // random
    it('random returns value between 0 and 1', () => {

        var randos = Array.from(Array(10).keys()).map(x => sut.random());

        for (var i = 0; i < randos.length; i++) {
            expect(randos[i]).toBeLessThanOrEqual(1);
            expect(randos[i]).toBeGreaterThanOrEqual(0);

        }
    });


    // floor
    it('floor rounds the value down', () => {

        var toFloor = Array.from(new Array(9).keys()).map((val, index) => index / 10);

        var floored = toFloor.map(x => sut.floor(x));

        for (var i = 0; i < floored.length; i++) {
            expect(floored[i]).toBe(0);
        }
    });


    // ceil
    it('ceil rounds the value up', () => {

        var toCeil = Array.from(new Array(9).keys()).map((val, index) => (index + 1) / 10);

        var ceiled = toCeil.map(x => sut.ceil(x));

        for (var i = 0; i < ceiled.length; i++) {
            expect(ceiled[i]).toBe(1);
        }
    });
});