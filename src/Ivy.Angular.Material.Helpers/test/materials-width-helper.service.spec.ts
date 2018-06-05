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

    describe('isSm', () => { 

        it('isSm true for low range at 481px', () => {

            let windowRef = TestBed.get(WindowRefService);
            let nativeWindow = { innerWidth: 481 };

            spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

            expect(sut.isXs()).toBe(false);
            expect(sut.isSm()).toBe(true);
            expect(sut.isMd()).toBe(false);
            expect(sut.isLg()).toBe(false);
            expect(sut.isXl()).toBe(false);
        });

        it('isSm true for high range at 960px', () => {

            let windowRef = TestBed.get(WindowRefService);
            let nativeWindow = { innerWidth: 960 };

            spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

            expect(sut.isXs()).toBe(false);
            expect(sut.isSm()).toBe(true);
            expect(sut.isMd()).toBe(false);
            expect(sut.isLg()).toBe(false);
            expect(sut.isXl()).toBe(false);
        });
    });

    describe('isMd', () => { 

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
    });

    describe('isLg', () => { 

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

    it('isBelow259 true for <=359px', () => {

        let windowRef = TestBed.get(WindowRefService);
        let nativeWindow = { innerWidth: 359 };

        spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

        let sut = new MaterialsWidthHelper(windowRef);

        expect(sut.isBelow359()).toBe(true);
        expect(sut.is360to399()).toBe(false);
        expect(sut.is400to479()).toBe(false);
        expect(sut.is480to599()).toBe(false);
        expect(sut.is600to719()).toBe(false);
        expect(sut.is720to839()).toBe(false);
        expect(sut.is840to959()).toBe(false);
        expect(sut.is960to1023()).toBe(false);
        expect(sut.is1024to1279()).toBe(false);
        expect(sut.is1280to1439()).toBe(false);
        expect(sut.is1440to1599()).toBe(false);
        expect(sut.is1600to1919()).toBe(false);
        expect(sut.isAbove1920()).toBe(false);
    });

    describe('is360to399', () => {

        it('is360to399 true for >=360px', () => {

            let windowRef = TestBed.get(WindowRefService);
            let nativeWindow = { innerWidth: 360 };

            spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

            let sut = new MaterialsWidthHelper(windowRef);

            expect(sut.isBelow359()).toBe(false);
            expect(sut.is360to399()).toBe(true);
            expect(sut.is400to479()).toBe(false);
            expect(sut.is480to599()).toBe(false);
            expect(sut.is600to719()).toBe(false);
            expect(sut.is720to839()).toBe(false);
            expect(sut.is840to959()).toBe(false);
            expect(sut.is960to1023()).toBe(false);
            expect(sut.is1024to1279()).toBe(false);
            expect(sut.is1280to1439()).toBe(false);
            expect(sut.is1440to1599()).toBe(false);
            expect(sut.is1600to1919()).toBe(false);
            expect(sut.isAbove1920()).toBe(false);
        });

        it('is360to399 true for <=399px', () => {

            let windowRef = TestBed.get(WindowRefService);
            let nativeWindow = { innerWidth: 399 };

            spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

            let sut = new MaterialsWidthHelper(windowRef);

            expect(sut.isBelow359()).toBe(false);
            expect(sut.is360to399()).toBe(true);
            expect(sut.is400to479()).toBe(false);
            expect(sut.is480to599()).toBe(false);
            expect(sut.is600to719()).toBe(false);
            expect(sut.is720to839()).toBe(false);
            expect(sut.is840to959()).toBe(false);
            expect(sut.is960to1023()).toBe(false);
            expect(sut.is1024to1279()).toBe(false);
            expect(sut.is1280to1439()).toBe(false);
            expect(sut.is1440to1599()).toBe(false);
            expect(sut.is1600to1919()).toBe(false);
            expect(sut.isAbove1920()).toBe(false);
        });
    });

    describe('is400to479', () => {

        it('is400to479 true for >=400px', () => {

            let windowRef = TestBed.get(WindowRefService);
            let nativeWindow = { innerWidth: 400 };

            spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

            let sut = new MaterialsWidthHelper(windowRef);

            expect(sut.isBelow359()).toBe(false);
            expect(sut.is360to399()).toBe(false);
            expect(sut.is400to479()).toBe(true);
            expect(sut.is480to599()).toBe(false);
            expect(sut.is600to719()).toBe(false);
            expect(sut.is720to839()).toBe(false);
            expect(sut.is840to959()).toBe(false);
            expect(sut.is960to1023()).toBe(false);
            expect(sut.is1024to1279()).toBe(false);
            expect(sut.is1280to1439()).toBe(false);
            expect(sut.is1440to1599()).toBe(false);
            expect(sut.is1600to1919()).toBe(false);
            expect(sut.isAbove1920()).toBe(false);
        });

        it('is400to479 true for <=479px', () => {

            let windowRef = TestBed.get(WindowRefService);
            let nativeWindow = { innerWidth: 479 };

            spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

            let sut = new MaterialsWidthHelper(windowRef);

            expect(sut.isBelow359()).toBe(false);
            expect(sut.is360to399()).toBe(false);
            expect(sut.is400to479()).toBe(true);
            expect(sut.is480to599()).toBe(false);
            expect(sut.is600to719()).toBe(false);
            expect(sut.is720to839()).toBe(false);
            expect(sut.is840to959()).toBe(false);
            expect(sut.is960to1023()).toBe(false);
            expect(sut.is1024to1279()).toBe(false);
            expect(sut.is1280to1439()).toBe(false);
            expect(sut.is1440to1599()).toBe(false);
            expect(sut.is1600to1919()).toBe(false);
            expect(sut.isAbove1920()).toBe(false);
        });
    });

    describe('is480to599', () => {

        it('is480to599 true for >=480px', () => {

            let windowRef = TestBed.get(WindowRefService);
            let nativeWindow = { innerWidth: 480 };

            spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

            let sut = new MaterialsWidthHelper(windowRef);

            expect(sut.isBelow359()).toBe(false);
            expect(sut.is360to399()).toBe(false);
            expect(sut.is400to479()).toBe(false);
            expect(sut.is480to599()).toBe(true);
            expect(sut.is600to719()).toBe(false);
            expect(sut.is720to839()).toBe(false);
            expect(sut.is840to959()).toBe(false);
            expect(sut.is960to1023()).toBe(false);
            expect(sut.is1024to1279()).toBe(false);
            expect(sut.is1280to1439()).toBe(false);
            expect(sut.is1440to1599()).toBe(false);
            expect(sut.is1600to1919()).toBe(false);
            expect(sut.isAbove1920()).toBe(false);
        });

        it('is480to599 true for <=599px', () => {

            let windowRef = TestBed.get(WindowRefService);
            let nativeWindow = { innerWidth: 599 };

            spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

            let sut = new MaterialsWidthHelper(windowRef);

            expect(sut.isBelow359()).toBe(false);
            expect(sut.is360to399()).toBe(false);
            expect(sut.is400to479()).toBe(false);
            expect(sut.is480to599()).toBe(true);
            expect(sut.is600to719()).toBe(false);
            expect(sut.is720to839()).toBe(false);
            expect(sut.is840to959()).toBe(false);
            expect(sut.is960to1023()).toBe(false);
            expect(sut.is1024to1279()).toBe(false);
            expect(sut.is1280to1439()).toBe(false);
            expect(sut.is1440to1599()).toBe(false);
            expect(sut.is1600to1919()).toBe(false);
            expect(sut.isAbove1920()).toBe(false);
        });
    });

    describe('is600to719', () => {

        it('is600to719 true for >=600px', () => {

            let windowRef = TestBed.get(WindowRefService);
            let nativeWindow = { innerWidth: 600 };

            spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

            let sut = new MaterialsWidthHelper(windowRef);

            expect(sut.isBelow359()).toBe(false);
            expect(sut.is360to399()).toBe(false);
            expect(sut.is400to479()).toBe(false);
            expect(sut.is480to599()).toBe(false);
            expect(sut.is600to719()).toBe(true);
            expect(sut.is720to839()).toBe(false);
            expect(sut.is840to959()).toBe(false);
            expect(sut.is960to1023()).toBe(false);
            expect(sut.is1024to1279()).toBe(false);
            expect(sut.is1280to1439()).toBe(false);
            expect(sut.is1440to1599()).toBe(false);
            expect(sut.is1600to1919()).toBe(false);
            expect(sut.isAbove1920()).toBe(false);
        });

        it('is600to719 true for <=719px', () => {

            let windowRef = TestBed.get(WindowRefService);
            let nativeWindow = { innerWidth: 719 };

            spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

            let sut = new MaterialsWidthHelper(windowRef);

            expect(sut.isBelow359()).toBe(false);
            expect(sut.is360to399()).toBe(false);
            expect(sut.is400to479()).toBe(false);
            expect(sut.is480to599()).toBe(false);
            expect(sut.is600to719()).toBe(true);
            expect(sut.is720to839()).toBe(false);
            expect(sut.is840to959()).toBe(false);
            expect(sut.is960to1023()).toBe(false);
            expect(sut.is1024to1279()).toBe(false);
            expect(sut.is1280to1439()).toBe(false);
            expect(sut.is1440to1599()).toBe(false);
            expect(sut.is1600to1919()).toBe(false);
            expect(sut.isAbove1920()).toBe(false);
        });
    });

    describe('is720to839', () => {

        it('is720to839 true for >=720px', () => {

            let windowRef = TestBed.get(WindowRefService);
            let nativeWindow = { innerWidth: 720 };

            spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

            let sut = new MaterialsWidthHelper(windowRef);

            expect(sut.isBelow359()).toBe(false);
            expect(sut.is360to399()).toBe(false);
            expect(sut.is400to479()).toBe(false);
            expect(sut.is480to599()).toBe(false);
            expect(sut.is600to719()).toBe(false);
            expect(sut.is720to839()).toBe(true);
            expect(sut.is840to959()).toBe(false);
            expect(sut.is960to1023()).toBe(false);
            expect(sut.is1024to1279()).toBe(false);
            expect(sut.is1280to1439()).toBe(false);
            expect(sut.is1440to1599()).toBe(false);
            expect(sut.is1600to1919()).toBe(false);
            expect(sut.isAbove1920()).toBe(false);
        });

        it('is720to839 true for <=839px', () => {

            let windowRef = TestBed.get(WindowRefService);
            let nativeWindow = { innerWidth: 839 };

            spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

            let sut = new MaterialsWidthHelper(windowRef);

            expect(sut.isBelow359()).toBe(false);
            expect(sut.is360to399()).toBe(false);
            expect(sut.is400to479()).toBe(false);
            expect(sut.is480to599()).toBe(false);
            expect(sut.is600to719()).toBe(false);
            expect(sut.is720to839()).toBe(true);
            expect(sut.is840to959()).toBe(false);
            expect(sut.is960to1023()).toBe(false);
            expect(sut.is1024to1279()).toBe(false);
            expect(sut.is1280to1439()).toBe(false);
            expect(sut.is1440to1599()).toBe(false);
            expect(sut.is1600to1919()).toBe(false);
            expect(sut.isAbove1920()).toBe(false);
        });
    });

    describe('is840to959', () => {

        it('is840to959 true for >=840px', () => {

            let windowRef = TestBed.get(WindowRefService);
            let nativeWindow = { innerWidth: 840 };

            spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

            let sut = new MaterialsWidthHelper(windowRef);

            expect(sut.isBelow359()).toBe(false);
            expect(sut.is360to399()).toBe(false);
            expect(sut.is400to479()).toBe(false);
            expect(sut.is480to599()).toBe(false);
            expect(sut.is600to719()).toBe(false);
            expect(sut.is720to839()).toBe(false);
            expect(sut.is840to959()).toBe(true);
            expect(sut.is960to1023()).toBe(false);
            expect(sut.is1024to1279()).toBe(false);
            expect(sut.is1280to1439()).toBe(false);
            expect(sut.is1440to1599()).toBe(false);
            expect(sut.is1600to1919()).toBe(false);
            expect(sut.isAbove1920()).toBe(false);
        });

        it('is840to959 true for <=959px', () => {

            let windowRef = TestBed.get(WindowRefService);
            let nativeWindow = { innerWidth: 959 };

            spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

            let sut = new MaterialsWidthHelper(windowRef);

            expect(sut.isBelow359()).toBe(false);
            expect(sut.is360to399()).toBe(false);
            expect(sut.is400to479()).toBe(false);
            expect(sut.is480to599()).toBe(false);
            expect(sut.is600to719()).toBe(false);
            expect(sut.is720to839()).toBe(false);
            expect(sut.is840to959()).toBe(true);
            expect(sut.is960to1023()).toBe(false);
            expect(sut.is1024to1279()).toBe(false);
            expect(sut.is1280to1439()).toBe(false);
            expect(sut.is1440to1599()).toBe(false);
            expect(sut.is1600to1919()).toBe(false);
            expect(sut.isAbove1920()).toBe(false);
        });
    });

    describe('is960to1023', () => {

        it('is960to1023 true for >=960px', () => {

            let windowRef = TestBed.get(WindowRefService);
            let nativeWindow = { innerWidth: 960 };

            spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

            let sut = new MaterialsWidthHelper(windowRef);

            expect(sut.isBelow359()).toBe(false);
            expect(sut.is360to399()).toBe(false);
            expect(sut.is400to479()).toBe(false);
            expect(sut.is480to599()).toBe(false);
            expect(sut.is600to719()).toBe(false);
            expect(sut.is720to839()).toBe(false);
            expect(sut.is840to959()).toBe(false);
            expect(sut.is960to1023()).toBe(true);
            expect(sut.is1024to1279()).toBe(false);
            expect(sut.is1280to1439()).toBe(false);
            expect(sut.is1440to1599()).toBe(false);
            expect(sut.is1600to1919()).toBe(false);
            expect(sut.isAbove1920()).toBe(false);
        });

        it('is960to1023 true for <=1023px', () => {

            let windowRef = TestBed.get(WindowRefService);
            let nativeWindow = { innerWidth: 1023 };

            spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

            let sut = new MaterialsWidthHelper(windowRef);

            expect(sut.isBelow359()).toBe(false);
            expect(sut.is360to399()).toBe(false);
            expect(sut.is400to479()).toBe(false);
            expect(sut.is480to599()).toBe(false);
            expect(sut.is600to719()).toBe(false);
            expect(sut.is720to839()).toBe(false);
            expect(sut.is840to959()).toBe(false);
            expect(sut.is960to1023()).toBe(true);
            expect(sut.is1024to1279()).toBe(false);
            expect(sut.is1280to1439()).toBe(false);
            expect(sut.is1440to1599()).toBe(false);
            expect(sut.is1600to1919()).toBe(false);
            expect(sut.isAbove1920()).toBe(false);
        });
    });

    describe('is1024to1279', () => {

        it('is1024to1279 true for >=1024px', () => {

            let windowRef = TestBed.get(WindowRefService);
            let nativeWindow = { innerWidth: 1024 };

            spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

            let sut = new MaterialsWidthHelper(windowRef);

            expect(sut.isBelow359()).toBe(false);
            expect(sut.is360to399()).toBe(false);
            expect(sut.is400to479()).toBe(false);
            expect(sut.is480to599()).toBe(false);
            expect(sut.is600to719()).toBe(false);
            expect(sut.is720to839()).toBe(false);
            expect(sut.is840to959()).toBe(false);
            expect(sut.is960to1023()).toBe(false);
            expect(sut.is1024to1279()).toBe(true);
            expect(sut.is1280to1439()).toBe(false);
            expect(sut.is1440to1599()).toBe(false);
            expect(sut.is1600to1919()).toBe(false);
            expect(sut.isAbove1920()).toBe(false);
        });

        it('is1024to1279 true for <=1279px', () => {

            let windowRef = TestBed.get(WindowRefService);
            let nativeWindow = { innerWidth: 1279 };

            spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

            let sut = new MaterialsWidthHelper(windowRef);

            expect(sut.isBelow359()).toBe(false);
            expect(sut.is360to399()).toBe(false);
            expect(sut.is400to479()).toBe(false);
            expect(sut.is480to599()).toBe(false);
            expect(sut.is600to719()).toBe(false);
            expect(sut.is720to839()).toBe(false);
            expect(sut.is840to959()).toBe(false);
            expect(sut.is960to1023()).toBe(false);
            expect(sut.is1024to1279()).toBe(true);
            expect(sut.is1280to1439()).toBe(false);
            expect(sut.is1440to1599()).toBe(false);
            expect(sut.is1600to1919()).toBe(false);
            expect(sut.isAbove1920()).toBe(false);
        });
    });

    describe('is1280to1439', () => {

        it('is1280to1439 true for >=1280px', () => {

            let windowRef = TestBed.get(WindowRefService);
            let nativeWindow = { innerWidth: 1280 };

            spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

            let sut = new MaterialsWidthHelper(windowRef);

            expect(sut.isBelow359()).toBe(false);
            expect(sut.is360to399()).toBe(false);
            expect(sut.is400to479()).toBe(false);
            expect(sut.is480to599()).toBe(false);
            expect(sut.is600to719()).toBe(false);
            expect(sut.is720to839()).toBe(false);
            expect(sut.is840to959()).toBe(false);
            expect(sut.is960to1023()).toBe(false);
            expect(sut.is1024to1279()).toBe(false);
            expect(sut.is1280to1439()).toBe(true);
            expect(sut.is1440to1599()).toBe(false);
            expect(sut.is1600to1919()).toBe(false);
            expect(sut.isAbove1920()).toBe(false);
        });

        it('is1280to1439 true for <=1439px', () => {

            let windowRef = TestBed.get(WindowRefService);
            let nativeWindow = { innerWidth: 1439 };

            spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

            let sut = new MaterialsWidthHelper(windowRef);

            expect(sut.isBelow359()).toBe(false);
            expect(sut.is360to399()).toBe(false);
            expect(sut.is400to479()).toBe(false);
            expect(sut.is480to599()).toBe(false);
            expect(sut.is600to719()).toBe(false);
            expect(sut.is720to839()).toBe(false);
            expect(sut.is840to959()).toBe(false);
            expect(sut.is960to1023()).toBe(false);
            expect(sut.is1024to1279()).toBe(false);
            expect(sut.is1280to1439()).toBe(true);
            expect(sut.is1440to1599()).toBe(false);
            expect(sut.is1600to1919()).toBe(false);
            expect(sut.isAbove1920()).toBe(false);
        });
    });

    describe('is1440to1599', () => {

        it('is1440to1599 true for >=1440px', () => {

            let windowRef = TestBed.get(WindowRefService);
            let nativeWindow = { innerWidth: 1440 };

            spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

            let sut = new MaterialsWidthHelper(windowRef);

            expect(sut.isBelow359()).toBe(false);
            expect(sut.is360to399()).toBe(false);
            expect(sut.is400to479()).toBe(false);
            expect(sut.is480to599()).toBe(false);
            expect(sut.is600to719()).toBe(false);
            expect(sut.is720to839()).toBe(false);
            expect(sut.is840to959()).toBe(false);
            expect(sut.is960to1023()).toBe(false);
            expect(sut.is1024to1279()).toBe(false);
            expect(sut.is1280to1439()).toBe(false);
            expect(sut.is1440to1599()).toBe(true);
            expect(sut.is1600to1919()).toBe(false);
            expect(sut.isAbove1920()).toBe(false);
        });

        it('is1440to1599 true for <=1559px', () => {

            let windowRef = TestBed.get(WindowRefService);
            let nativeWindow = { innerWidth: 1559 };

            spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

            let sut = new MaterialsWidthHelper(windowRef);

            expect(sut.isBelow359()).toBe(false);
            expect(sut.is360to399()).toBe(false);
            expect(sut.is400to479()).toBe(false);
            expect(sut.is480to599()).toBe(false);
            expect(sut.is600to719()).toBe(false);
            expect(sut.is720to839()).toBe(false);
            expect(sut.is840to959()).toBe(false);
            expect(sut.is960to1023()).toBe(false);
            expect(sut.is1024to1279()).toBe(false);
            expect(sut.is1280to1439()).toBe(false);
            expect(sut.is1440to1599()).toBe(true);
            expect(sut.is1600to1919()).toBe(false);
            expect(sut.isAbove1920()).toBe(false);
        });
    });

    describe('is1600to1919', () => {

        it('is1600to1919 true for >=1600px', () => {

            let windowRef = TestBed.get(WindowRefService);
            let nativeWindow = { innerWidth: 1600 };

            spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

            let sut = new MaterialsWidthHelper(windowRef);

            expect(sut.isBelow359()).toBe(false);
            expect(sut.is360to399()).toBe(false);
            expect(sut.is400to479()).toBe(false);
            expect(sut.is480to599()).toBe(false);
            expect(sut.is600to719()).toBe(false);
            expect(sut.is720to839()).toBe(false);
            expect(sut.is840to959()).toBe(false);
            expect(sut.is960to1023()).toBe(false);
            expect(sut.is1024to1279()).toBe(false);
            expect(sut.is1280to1439()).toBe(false);
            expect(sut.is1440to1599()).toBe(false);
            expect(sut.is1600to1919()).toBe(true);
            expect(sut.isAbove1920()).toBe(false);
        });

        it('is1600to1919 true for <=1919px', () => {

            let windowRef = TestBed.get(WindowRefService);
            let nativeWindow = { innerWidth: 1919 };

            spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

            let sut = new MaterialsWidthHelper(windowRef);

            expect(sut.isBelow359()).toBe(false);
            expect(sut.is360to399()).toBe(false);
            expect(sut.is400to479()).toBe(false);
            expect(sut.is480to599()).toBe(false);
            expect(sut.is600to719()).toBe(false);
            expect(sut.is720to839()).toBe(false);
            expect(sut.is840to959()).toBe(false);
            expect(sut.is960to1023()).toBe(false);
            expect(sut.is1024to1279()).toBe(false);
            expect(sut.is1280to1439()).toBe(false);
            expect(sut.is1440to1599()).toBe(false);
            expect(sut.is1600to1919()).toBe(true);
            expect(sut.isAbove1920()).toBe(false);
        });
    });

    it('isBelow259 true for >=1920px', () => {

        let windowRef = TestBed.get(WindowRefService);
        let nativeWindow = { innerWidth: 1920 };

        spyOnProperty(windowRef, 'nativeWindow', 'get').and.returnValue(nativeWindow);

        let sut = new MaterialsWidthHelper(windowRef);

        expect(sut.isBelow359()).toBe(false);
        expect(sut.is360to399()).toBe(false);
        expect(sut.is400to479()).toBe(false);
        expect(sut.is480to599()).toBe(false);
        expect(sut.is600to719()).toBe(false);
        expect(sut.is720to839()).toBe(false);
        expect(sut.is840to959()).toBe(false);
        expect(sut.is960to1023()).toBe(false);
        expect(sut.is1024to1279()).toBe(false);
        expect(sut.is1280to1439()).toBe(false);
        expect(sut.is1440to1599()).toBe(false);
        expect(sut.is1600to1919()).toBe(false);
        expect(sut.isAbove1920()).toBe(true);
    });

});