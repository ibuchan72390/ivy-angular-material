import 'jasmine';

import { Component } from '@angular/core';

import { TestBed } from '@angular/core/testing';

import { IvyAngularMaterialHelperDirectivesModule } from '../ivy.angular.material.helper-directives.module';

import { ChildNodeHelperService } from '../src/Services/child-node-helper.service';

describe('ChildNodeHelperService', () => {

    // Variables
    let sut: ChildNodeHelperService;


    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialHelperDirectivesModule.forRoot()
            ],
        });

        sut = TestBed.get(ChildNodeHelperService);
    });


    // Tests
    it('node with matching class is returned', () => {

        let targetClass = 'my-class';

        let classListSpy: jasmine.SpyObj<DOMTokenList> =
            jasmine.createSpyObj({ 'contains': true });

        let node: any = {
            children: [
                { classList: classListSpy }
            ]
        };

        let result = sut.findChildNodeByClass(node, targetClass);

        expect(result).toBe(node.children[0]);

        expect(classListSpy.contains).toHaveBeenCalledTimes(1);
        expect(classListSpy.contains).toHaveBeenCalledWith(targetClass);
    });

    it('node with matching class is returned if others do not have class list', () => {

        let targetClass = 'my-class';

        let classListSpy: jasmine.SpyObj<DOMTokenList> =
            jasmine.createSpyObj({ 'contains': true });

        let node: any = {
            children: [
                {},
                {},
                { classList: classListSpy }
            ]
        };

        let result = sut.findChildNodeByClass(node, targetClass);

        expect(result).toBe(node.children[node.children.length - 1]);

        expect(classListSpy.contains).toHaveBeenCalledTimes(1);
        expect(classListSpy.contains).toHaveBeenCalledWith(targetClass);
    });

    it('Error is thrown if no node with matching class is found', () => {

        let targetClass = 'my-class';

        let node: any = {
            children: [
            ]
        };

        const expectedErr = 'Unable to find child node of class! - Target Class: ' + targetClass;

        expect(() => sut.findChildNodeByClass(node, targetClass)).toThrow(expectedErr);
    });
});