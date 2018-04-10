import 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { MatIcon } from '@angular/material';

import { IvyAngularMaterialIconToggleModule } from '../ivy.angular.material.icon-toggle.module';

import { IvyAngularMaterialExpandCollapseComponent } from '../src/Components/ExpandCollapse/expand-collapse.component';

describe('IvyAngularMaterialExpandCollapseComponent', () => {

    // Variables
    let fixture: ComponentFixture<IvyAngularMaterialExpandCollapseComponent>;
    let sut: IvyAngularMaterialExpandCollapseComponent;


    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialIconToggleModule
            ]
        });

        fixture = TestBed.createComponent(IvyAngularMaterialExpandCollapseComponent);
        sut = fixture.componentInstance;
    });


    // Tests
    it('ExpandCollapse renders the button as expected for isCollapsed === true', () => {

        sut.isCollapsed = true;

        fixture.detectChanges();

        let iconElem = fixture.debugElement.query(By.directive(MatIcon));

        expect(iconElem.nativeElement.innerText).toBe('expand_more');
    });

    it('ExpandCollapse renders the button as expected for isCollapsed === false', () => {

        sut.isCollapsed = false;

        fixture.detectChanges();

        let iconElem = fixture.debugElement.query(By.directive(MatIcon));

        expect(iconElem.nativeElement.innerText).toBe('expand_less');
    });

    it('ExpandCollapse emits as expected when input is isCollapsed === true', () => {

        sut.isCollapsed = true;

        fixture.detectChanges();

        let button = fixture.debugElement.children[0];

        let expanded: number = 0;
        sut.onExpand.subscribe(() => expanded++);

        button.triggerEventHandler('click', {});

        expect(expanded).toBe(1);
    });

    it('ExpandCollapse emits as expected when input is isCollapsed === false', () => {

        sut.isCollapsed = false;

        fixture.detectChanges();

        let button = fixture.debugElement.children[0];

        let collapsed: number = 0;
        sut.onCollapse.subscribe(() => collapsed++);

        button.triggerEventHandler('click', {});

        expect(collapsed).toBe(1);
    });
});