import 'jasmine';

import { WindowRefService } from 'ivy.angular.web';
import { MaterialsWidthHelper } from '../src/Services/materials-width-helper.service';

describe('MaterialsWidthHelper', () => {

    it('isXs true for anything under 480px', () => {

        let windowRef = new WindowRefService();
        let nativeWindow = { innerWidth: 479 };

        spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

        let sut = new MaterialsWidthHelper(windowRef);

        expect(sut.isXs()).toBe(true);
        expect(sut.isSm()).toBe(false);
        expect(sut.isMd()).toBe(false);
        expect(sut.isLg()).toBe(false);
        expect(sut.isXl()).toBe(false);
    });

    it('isXs true for low range at 481px', () => {

        let windowRef = new WindowRefService();
        let nativeWindow = { innerWidth: 481 };

        spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

        let sut = new MaterialsWidthHelper(windowRef);

        expect(sut.isXs()).toBe(false);
        expect(sut.isSm()).toBe(true);
        expect(sut.isMd()).toBe(false);
        expect(sut.isLg()).toBe(false);
        expect(sut.isXl()).toBe(false);
    });

    it('isXs true for high range at 960px', () => {

        let windowRef = new WindowRefService();
        let nativeWindow = { innerWidth: 960 };

        spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

        let sut = new MaterialsWidthHelper(windowRef);

        expect(sut.isXs()).toBe(false);
        expect(sut.isSm()).toBe(true);
        expect(sut.isMd()).toBe(false);
        expect(sut.isLg()).toBe(false);
        expect(sut.isXl()).toBe(false);
    });

    it('isMd true for low range at 961px', () => {

        let windowRef = new WindowRefService();
        let nativeWindow = { innerWidth: 961 };

        spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

        let sut = new MaterialsWidthHelper(windowRef);

        expect(sut.isXs()).toBe(false);
        expect(sut.isSm()).toBe(false);
        expect(sut.isMd()).toBe(true);
        expect(sut.isLg()).toBe(false);
        expect(sut.isXl()).toBe(false);
    });

    it('isMd true for low range at 1280px', () => {

        let windowRef = new WindowRefService();
        let nativeWindow = { innerWidth: 1280 };

        spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

        let sut = new MaterialsWidthHelper(windowRef);

        expect(sut.isXs()).toBe(false);
        expect(sut.isSm()).toBe(false);
        expect(sut.isMd()).toBe(true);
        expect(sut.isLg()).toBe(false);
        expect(sut.isXl()).toBe(false);
    });

    it('isLg true for anything between 1281px and 1920px', () => {

        let windowRef = new WindowRefService();
        let nativeWindow = { innerWidth: 1281 };

        spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

        let sut = new MaterialsWidthHelper(windowRef);

        expect(sut.isXs()).toBe(false);
        expect(sut.isSm()).toBe(false);
        expect(sut.isMd()).toBe(false);
        expect(sut.isLg()).toBe(true);
        expect(sut.isXl()).toBe(false);
    });

    it('isLg true for anything between 1281px and 1920px', () => {

        let windowRef = new WindowRefService();
        let nativeWindow = { innerWidth: 1920 };

        spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

        let sut = new MaterialsWidthHelper(windowRef);

        expect(sut.isXs()).toBe(false);
        expect(sut.isSm()).toBe(false);
        expect(sut.isMd()).toBe(false);
        expect(sut.isLg()).toBe(true);
        expect(sut.isXl()).toBe(false);
    });

    it('isXl true for anything over 1920px', () => {

        let windowRef = new WindowRefService();
        let nativeWindow = { innerWidth: 1921 };

        spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

        let sut = new MaterialsWidthHelper(windowRef);

        expect(sut.isXs()).toBe(false);
        expect(sut.isSm()).toBe(false);
        expect(sut.isMd()).toBe(false);
        expect(sut.isLg()).toBe(false);
        expect(sut.isXl()).toBe(true);
    });

});