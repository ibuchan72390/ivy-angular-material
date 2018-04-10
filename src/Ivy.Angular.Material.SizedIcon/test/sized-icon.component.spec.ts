import 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Renderer2, Renderer } from '@angular/core';

import { MatIconRegistry } from '@angular/material';

import { IvyAngularMaterialSizedIconModule } from '../ivy.angular.material.sized-icon.module';

import { MaterialSizedIconComponent } from '../src/Components/SizedIcon/sized-icon.component';

describe('MaterialSizedIconComponent', () => {

    // Variables
    let fixture: ComponentFixture<MaterialSizedIconComponent>;
    let sut: MaterialSizedIconComponent;

    const iconName: string = 'accessibility';
    const iconColor: string = 'accent';
    const iconSize: string = '72px';


    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialSizedIconModule
            ],
            providers: [
                Renderer
            ]
        });

        fixture = TestBed.createComponent(MaterialSizedIconComponent);
        sut = fixture.componentInstance;

        sut.iconName = iconName;
        sut.iconColor = iconColor;
        sut.iconSize = iconSize;

        // I am seemingly unable to include extra elements in order for us to properly render icon elements
        //let linkElem = document.createElement("link");
        //linkElem.rel = 'stylesheet';
        //linkElem.type = 'text/css';
        //linkElem.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';

        //const iconLinkTag = renderer.createElement('link');
        //renderer.setAttribute(iconLinkTag, 'rel', 'stylesheet');
        //renderer.setAttribute(iconLinkTag, 'type', 'text/css');
        //renderer.setAttribute(iconLinkTag, 'href', 'https://fonts.googleapis.com/icon?family=Material+Icons')

        //let iconReg = TestBed.get(MatIconRegistry);
        //iconReg.addSvgIconSetInNamespace('core', 'fonts/core-icon-set.svg');

        fixture.detectChanges();
    });


    // Tests
    it('SizedMaterialIcon binds the size correctly', () => {

        let iconElem = fixture.debugElement.children[0];

        expect(iconElem.styles['font-size']).toBe(iconSize);
        expect(iconElem.styles['width']).toBe(iconSize);
        expect(iconElem.styles['height']).toBe(iconSize);
    });

    it('SizedMaterialIcon binds the color correctly', () => {

        let iconElem = fixture.debugElement.children[0];

        expect(iconElem.attributes['ng-reflect-color']).toBe(iconColor);
    });

    it('SizedMaterialIcon binds the icon name correctly', () => {

        let iconElem = fixture.debugElement.children[0];

        expect(iconElem.nativeElement.innerText).toBe(iconName);
    });
});