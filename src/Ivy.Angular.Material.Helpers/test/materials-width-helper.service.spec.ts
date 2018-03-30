import 'jasmine';

import { TestBed } from '@angular/core/testing';

import { IvyMaterialHelpersModule } from '../ivy.material-helpers.module';
import { IvyWebModule, WindowRefService } from 'ivy.angular.web';
import { MaterialsWidthHelper } from '../src/Services/materials-width-helper.service';

describe('MaterialsWidthHelper', () => {

    let sut: MaterialsWidthHelper;


    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyMaterialHelpersModule,
                IvyWebModule
            ]
        });

        sut = TestBed.get(MaterialsWidthHelper);
    });


    it('isXs true for anything under 480px', () => {

        let windowRef = TestBed.get(WindowRefService);
        let nativeWindow = { innerWidth: 479 };

        spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

        expect(sut.isXs()).toBe(true);
        expect(sut.isSm()).toBe(false);
        expect(sut.isMd()).toBe(false);
        expect(sut.isLg()).toBe(false);
        expect(sut.isXl()).toBe(false);
    });

    it('isXs true for low range at 481px', () => {

        let windowRef = TestBed.get(WindowRefService);
        let nativeWindow = { innerWidth: 481 };

        spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

        expect(sut.isXs()).toBe(false);
        expect(sut.isSm()).toBe(true);
        expect(sut.isMd()).toBe(false);
        expect(sut.isLg()).toBe(false);
        expect(sut.isXl()).toBe(false);
    });

    it('isXs true for high range at 960px', () => {

        let windowRef = TestBed.get(WindowRefService);
        let nativeWindow = { innerWidth: 960 };

        spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

        expect(sut.isXs()).toBe(false);
        expect(sut.isSm()).toBe(true);
        expect(sut.isMd()).toBe(false);
        expect(sut.isLg()).toBe(false);
        expect(sut.isXl()).toBe(false);
    });

    it('isMd true for low range at 961px', () => {

        let windowRef = TestBed.get(WindowRefService);
        let nativeWindow = { innerWidth: 961 };

        spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

        expect(sut.isXs()).toBe(false);
        expect(sut.isSm()).toBe(false);
        expect(sut.isMd()).toBe(true);
        expect(sut.isLg()).toBe(false);
        expect(sut.isXl()).toBe(false);
    });

    it('isMd true for low range at 1280px', () => {

        let windowRef = TestBed.get(WindowRefService);
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

        let windowRef = TestBed.get(WindowRefService);
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

        let windowRef = TestBed.get(WindowRefService);
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

        let windowRef = TestBed.get(WindowRefService);
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