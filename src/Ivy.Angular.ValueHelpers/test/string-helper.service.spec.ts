import 'jasmine';
import { StringHelper } from '../src/StringHelper/string-helper.service';

describe('StringHelper', () => {

    // Varaibles & Constants
    let sut: StringHelper;
    beforeEach(() => this.sut = new StringHelper());


    // isNullOrEmpty
    it('isNullOrEmpty returns true for null', () => {

        let testVal = null;

        expect(this.sut.isNullOrEmpty(testVal)).toBe(true);
    });

    it('isNullOrEmpty returns true for empty', () => {

        let testVal = '';

        expect(this.sut.isNullOrEmpty(testVal)).toBe(true);
    });

    it('isNullOrEmpty returns false for value', () => {

        let testVal = 'test';

        expect(this.sut.isNullOrEmpty(testVal)).toBe(false);
    });

    // randomString


    // randomIfNullOrEmpty()
});