import 'jasmine';

import { MathHelper } from '../src/Services/math-helper.service';
import { StringHelper } from '../src/Services/string-helper.service';

describe('StringHelper', () => {

    let sut: StringHelper;


    // Setup & Teardown
    beforeEach(() => this.sut = new StringHelper(new MathHelper()));


    // isNullOrEmpty
    it('isNullOrEmpty returns true for null', () => {

        let test = null;

        expect(this.sut.isNullOrEmpty(test)).toBe(true);
    });

    it('isNullOrEmpty returns true for empty', () => {

        let test = '';

        expect(this.sut.isNullOrEmpty(test)).toBe(true);
    });

    it('isNullOrEmpty returns false for value', () => {

        let test = 'test';

        expect(this.sut.isNullOrEmpty(test)).toBe(false);
    });


    // randomString
    it('randomString returns a random string as expected', () => {

        // Arrange
        const stringLength = 10;
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        const mathHelperSpy = jasmine.createSpyObj('MathHelper', ['random', 'floor']);

        let randomVal = 0;
        mathHelperSpy.random.and.returnValue(randomVal);

        //https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp
        let expectedArr = Array.from(Array(stringLength).keys()).map(x => possible[randomVal]);
        let expected = expectedArr.reduce((prev, curr) => prev + curr);

        // Act
        this.sut = new StringHelper(mathHelperSpy);


        // Assert
        let result = this.sut.randomString();

        expect(result).toBe(expected);
        expect(mathHelperSpy.random.calls.count()).toBe(stringLength);
        expect(mathHelperSpy.floor.calls.count()).toBe(stringLength);
    });


    // randomIfNullOrEmpty()
    it('randomIfNullOrEmpty returns random if null', () => {

        let test = null;

        expect(this.sut.randomIfNullOrEmpty(test)).not.toBe(test);
    });

    it('randomIfNullOrEmpty returns random if empty', () => {

        let test = '';

        expect(this.sut.randomIfNullOrEmpty(test)).not.toBe(test);
    });

    it('randomIfNullOrEmpty returns same if has value', () => {

        let test = 'test';

        expect(this.sut.randomIfNullOrEmpty(test)).toBe(test);
    });
});