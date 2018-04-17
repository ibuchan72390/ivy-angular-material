import 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';

import { MatIcon } from '@angular/material';

import { By } from '@angular/platform-browser';

import { IvyAngularMaterialNotFoundModule } from '../ivy.angular.material.not-found.module';

import { MaterialNotFoundComponent } from '../src/Components/NotFound/not-found.component';

import { FlexFillDirective, LayoutDirective, LayoutAlignDirective } from '@angular/flex-layout';

import { FlexLayoutTestHelper } from 'ivy.angular.test-helpers';

describe('MaterialNotFoundComponent', () => {

    // Variables
    let fixture: ComponentFixture<MaterialNotFoundComponent>;
    let sut: MaterialNotFoundComponent;


    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialNotFoundModule
            ]
        });

        fixture = TestBed.createComponent(MaterialNotFoundComponent);
        sut = fixture.componentInstance;

        fixture.detectChanges();
    });


    // Tests
    it('Flex styling is applied as expected', () => {

        let expectedElem = fixture.debugElement.children[0];

        // FlexFill
        let flexFillElem = fixture.debugElement.query(By.directive(FlexFillDirective));
        expect(flexFillElem).toBe(expectedElem);


        // FlexLayout
        let flexLayoutElem = fixture.debugElement.query(By.directive(LayoutDirective));
        expect(flexLayoutElem).toBe(expectedElem);

        let layout = FlexLayoutTestHelper.getFxLayoutValue(flexLayoutElem);
        expect(layout).toBe('column');

        // FlexLayoutAlign
        let flexLayoutAlignElem = fixture.debugElement.query(By.directive(LayoutAlignDirective));
        expect(flexLayoutAlignElem).toBe(expectedElem);

        let align = FlexLayoutTestHelper.getFxLayoutAlignValue(flexLayoutAlignElem);
        expect(align).toBe('center center');
    });

    it('Icon is applied correctly', () => {

        let iconElem = fixture.debugElement.query(By.directive(MatIcon));

        expect(iconElem.nativeElement.innerText.indexOf('warning')).not.toBe(-1);
        expect(iconElem.nativeElement.attributes['color'].value).toBe('warn');
    });

    it('Heading text matches expected', () => {

        let h3Elem = fixture.debugElement.nativeElement.querySelector('h3');

        expect(h3Elem.innerText).toBe('It appears that the page you\'re looking for could not be found!');
    });
});