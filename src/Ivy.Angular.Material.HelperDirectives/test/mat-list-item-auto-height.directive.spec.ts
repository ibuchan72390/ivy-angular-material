import 'jasmine';

import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { TestBed, ComponentFixture } from '@angular/core/testing';

import { MatListModule } from '@angular/material';

import { IvyAngularMaterialHelperDirectivesModule } from '../ivy.angular.material.helper-directives.module';

import { MatListItemAutoHeightDirective } from '../src/Directives/mat-list-item-auto-height.directive';

describe('MatListItemAutoHeightDirective', () => {

    // Variables
    let fixture: ComponentFixture<DirectiveTestComponent>;
    let component: DirectiveTestComponent;


    // Setup
    beforeEach(() => {
        
        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialHelperDirectivesModule,
                IvyAngularMaterialHelperDirectivesModule.forRoot(),
                MatListModule
            ],
            declarations: [
                DirectiveTestComponent
            ]
        });

        fixture = TestBed.createComponent(DirectiveTestComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    // Tests
    it('MatListItemAutoHeightDirective properly sets height: auto on the mat-list-item', () => {
        
        let elem = fixture.debugElement.query(By.directive(MatListItemAutoHeightDirective));

        expect(elem).not.toBe(null);

        let contentElem = elem.query(By.css('.mat-list-item-content'));

        expect(contentElem).not.toBe(null);

        expect(contentElem.styles.height).toBe('auto');
    });
});


@Component({
    selector: 'ivy-directive-test',
    template: '<mat-list><mat-list-item ivy-mat-list-item-auto-height></mat-list-item></mat-list>'
})
export class DirectiveTestComponent {


}