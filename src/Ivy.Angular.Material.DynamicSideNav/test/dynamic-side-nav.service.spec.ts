import 'jasmine';

import { TestBed } from '@angular/core/testing';

import { IvyAngularMaterialDynamicSideNavModule } from '../ivy.angular.material.dynamic-side-nav.module';

import { DynamicSideNavService } from '../src/Services/dynamic-side-nav.service';
import { MaterialsWidthHelper } from 'ivy.angular.material.helpers';


describe('DynamicSideNavService', () => {

    // Variables
    let sut: DynamicSideNavService;
    let widthHelperSpy: jasmine.SpyObj<MaterialsWidthHelper>;


    // constructor
    it('internalIsOpen will set useSide to false in the constructor if isSm true and isXs false', () => {

        widthHelperSpy = jasmine.createSpyObj('MaterialsWidthHelper', { 'isSm': true, 'isXs': false });

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialDynamicSideNavModule
            ],
            providers: [
                { provide: MaterialsWidthHelper, useValue: widthHelperSpy }
            ]
        });

        sut = TestBed.get(DynamicSideNavService);

        expect(sut.prevUseSide).toBeFalsy();
        expect(sut.internalIsOpen).toBeFalsy();

        // Called once in constructor, once in useSide execution
        expect(widthHelperSpy.isSm).toHaveBeenCalledTimes(1);

        // Only call isXs if isSm is false
        expect(widthHelperSpy.isXs).toHaveBeenCalledTimes(0);
    });

    it('internalIsOpen will set useSide to false in the constructor if isSm false and isXs true', () => {

        widthHelperSpy = jasmine.createSpyObj('MaterialsWidthHelper', { 'isSm': false, 'isXs': true });

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialDynamicSideNavModule
            ],
            providers: [
                { provide: MaterialsWidthHelper, useValue: widthHelperSpy }
            ]
        });

        sut = TestBed.get(DynamicSideNavService);

        expect(sut.prevUseSide).toBeFalsy();
        expect(sut.internalIsOpen).toBeFalsy();

        // Called once in constructor, once in useSide execution
        expect(widthHelperSpy.isSm).toHaveBeenCalledTimes(1);

        // Only call isXs if isSm is false
        expect(widthHelperSpy.isXs).toHaveBeenCalledTimes(1);
    });

    it('internalIsOpen will set useSide to true in the constructor if useSide false', () => {

        widthHelperSpy = jasmine.createSpyObj('MaterialsWidthHelper', { 'isSm': false, 'isXs': false });

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialDynamicSideNavModule
            ],
            providers: [
                { provide: MaterialsWidthHelper, useValue: widthHelperSpy }
            ]
        });

        sut = TestBed.get(DynamicSideNavService);

        expect(sut.prevUseSide).toBeTruthy();
        expect(sut.internalIsOpen).toBeTruthy();

        // Called once in constructor, once in useSide execution
        expect(widthHelperSpy.isSm).toHaveBeenCalledTimes(1);

        // Only call isXs if isSm is false
        expect(widthHelperSpy.isXs).toHaveBeenCalledTimes(1);
    });


    // isOpen
    it('isOpen returns true if useSide', () => {

        widthHelperSpy = jasmine.createSpyObj('MaterialsWidthHelper', { 'isSm': false, 'isXs': false });

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialDynamicSideNavModule
            ],
            providers: [
                { provide: MaterialsWidthHelper, useValue: widthHelperSpy }
            ]
        });

        sut = TestBed.get(DynamicSideNavService);

        expect(sut.useSide()).toBeTruthy();

        expect(sut.isOpen()).toBeTruthy();
    });

    it('isOpen returns internalIsOpen if !useSide', () => {

        widthHelperSpy = jasmine.createSpyObj('MaterialsWidthHelper', { 'isSm': true, 'isXs': false });

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialDynamicSideNavModule
            ],
            providers: [
                { provide: MaterialsWidthHelper, useValue: widthHelperSpy }
            ]
        });

        sut = TestBed.get(DynamicSideNavService);

        expect(sut.useSide()).toBeFalsy();

        expect(sut.isOpen()).toBe(sut.internalIsOpen);
    });


    // setIsOpen
    it('setIsOpen can change from true to false', () => {

        widthHelperSpy = jasmine.createSpyObj('MaterialsWidthHelper', { 'isSm': false, 'isXs': false });

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialDynamicSideNavModule
            ],
            providers: [
                { provide: MaterialsWidthHelper, useValue: widthHelperSpy }
            ]
        });

        sut = TestBed.get(DynamicSideNavService);

        expect(sut.internalIsOpen).toBeTruthy();

        sut.setIsOpen(false);

        expect(sut.internalIsOpen).toBeFalsy();
    });

    it('setIsOpen can change from false to true', () => {

        widthHelperSpy = jasmine.createSpyObj('MaterialsWidthHelper', { 'isSm': false, 'isXs': true });

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialDynamicSideNavModule
            ],
            providers: [
                { provide: MaterialsWidthHelper, useValue: widthHelperSpy }
            ]
        });

        sut = TestBed.get(DynamicSideNavService);

        expect(sut.internalIsOpen).toBeFalsy();

        sut.setIsOpen(true);

        expect(sut.internalIsOpen).toBeTruthy();
    });


    // toggleNav
    it('toggleNav sets internalIsOpen to true if !useSide', () => {

        widthHelperSpy = jasmine.createSpyObj('MaterialsWidthHelper', { 'isSm': false, 'isXs': false });

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialDynamicSideNavModule
            ],
            providers: [
                { provide: MaterialsWidthHelper, useValue: widthHelperSpy }
            ]
        });

        sut = TestBed.get(DynamicSideNavService);

        expect(sut.useSide()).toBeTruthy();        

        sut.internalIsOpen = false;

        sut.toggleNav();

        expect(sut.internalIsOpen).toBeTruthy();
    });

    it('toggleNav sets internalIsOpen to !internalIsOpen if useSide', () => {

        widthHelperSpy = jasmine.createSpyObj('MaterialsWidthHelper', { 'isSm': false, 'isXs': true });

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialDynamicSideNavModule
            ],
            providers: [
                { provide: MaterialsWidthHelper, useValue: widthHelperSpy }
            ]
        });

        sut = TestBed.get(DynamicSideNavService);

        expect(sut.useSide()).toBeFalsy();

        let origInternalOpen = sut.internalIsOpen;

        sut.toggleNav();

        expect(sut.internalIsOpen).toBe(!origInternalOpen);
    });

    // useSide
    it('useSide returns false if widthHelper isSm', () => {

        widthHelperSpy = jasmine.createSpyObj('MaterialsWidthHelper', { 'isSm': true, 'isXs': false });

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialDynamicSideNavModule
            ],
            providers: [
                { provide: MaterialsWidthHelper, useValue: widthHelperSpy }
            ]
        });

        sut = TestBed.get(DynamicSideNavService);

        let origIsOpen = sut.internalIsOpen;
        expect(sut.prevUseSide).toBeFalsy();

        let useSide = sut.useSide();

        expect(useSide).toBeFalsy();
        expect(sut.prevUseSide).toBeFalsy();
        expect(sut.internalIsOpen).toBe(origIsOpen);

        // Called once in constructor, once in useSide execution
        expect(widthHelperSpy.isSm).toHaveBeenCalledTimes(2);

        // Don't call isXs if isSm is true
        // Simplifies order of operations if one is false, the and is irrelevant
        expect(widthHelperSpy.isXs).not.toHaveBeenCalled();
    });

    it('useSide returns false if widthHelper isXs', () => {

        widthHelperSpy = jasmine.createSpyObj('MaterialsWidthHelper', { 'isSm': false, 'isXs': true });

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialDynamicSideNavModule
            ],
            providers: [
                { provide: MaterialsWidthHelper, useValue: widthHelperSpy }
            ]
        });

        sut = TestBed.get(DynamicSideNavService);

        let origIsOpen = sut.internalIsOpen;
        expect(sut.prevUseSide).toBeFalsy();

        let useSide = sut.useSide();

        expect(useSide).toBeFalsy();
        expect(sut.prevUseSide).toBeFalsy();
        expect(sut.internalIsOpen).toBe(origIsOpen);

        // Called once in constructor, once in useSide execution
        expect(widthHelperSpy.isSm).toHaveBeenCalledTimes(2);

        // Only call isXs if isSm is false
        expect(widthHelperSpy.isXs).toHaveBeenCalledTimes(2);
    });

    it('useSide returns true if widthHelper !isSm && !isXs', () => {

        widthHelperSpy = jasmine.createSpyObj('MaterialsWidthHelper', { 'isSm': false, 'isXs': false });

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialDynamicSideNavModule
            ],
            providers: [
                { provide: MaterialsWidthHelper, useValue: widthHelperSpy }
            ]
        });

        sut = TestBed.get(DynamicSideNavService);

        let origIsOpen = sut.internalIsOpen;
        expect(sut.prevUseSide).toBeTruthy(); // Starts as true because this is executed in constructor

        let useSide = sut.useSide();

        expect(useSide).toBeTruthy();
        expect(sut.prevUseSide).toBeTruthy();
        expect(sut.internalIsOpen).toBe(origIsOpen); // This should match what it is from the constructor call

        // Called once in constructor, once in useSide execution
        expect(widthHelperSpy.isSm).toHaveBeenCalledTimes(2);

        // Only call isXs if isSm is false
        expect(widthHelperSpy.isXs).toHaveBeenCalledTimes(2);
    });


    // getSideNavMode
    it('getSideNavMode returns "side" if useSide is true', () => {

        widthHelperSpy = jasmine.createSpyObj('MaterialsWidthHelper', { 'isSm': false, 'isXs': false });

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialDynamicSideNavModule
            ],
            providers: [
                { provide: MaterialsWidthHelper, useValue: widthHelperSpy }
            ]
        });

        sut = TestBed.get(DynamicSideNavService);

        expect(sut.useSide()).toBeTruthy();

        expect(sut.getSidenavMode()).toBe('side');
    });

    it('getSideNavMode returns "over" if useSide is false', () => {

        widthHelperSpy = jasmine.createSpyObj('MaterialsWidthHelper', { 'isSm': false, 'isXs': true });

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialDynamicSideNavModule
            ],
            providers: [
                { provide: MaterialsWidthHelper, useValue: widthHelperSpy }
            ]
        });

        sut = TestBed.get(DynamicSideNavService);

        expect(sut.useSide()).toBeFalsy();

        expect(sut.getSidenavMode()).toBe('over');
    });
});