import 'jasmine';

import { Component, Input, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { MatCardModule, MatCardContent } from '@angular/material';

import { LayoutAlignDirective } from '@angular/flex-layout';

import { IvyAngularMaterialExpandingTitleMatCardModule } from '../ivy.angular.material.expanding-title-mat-card.module';

import { MaterialExpandingTitleMatCardComponent } from '../src/Components/ExpandingTitleMatCard/expanding-title-mat-card.component';

describe('MaterialExpandingTitleMatCardComponent Unit Tests', () => {

    let fixture: ComponentFixture<MaterialExpandingTitleMatCardComponent>;
    let sut: MaterialExpandingTitleMatCardComponent;


    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialExpandingTitleMatCardModule,
                NoopAnimationsModule
            ]
        });

        fixture = TestBed.createComponent(MaterialExpandingTitleMatCardComponent);
        sut = fixture.componentInstance;
    });


    it('Component sets up the title correctly', () => {

        expect(sut).not.toBe(null);

        sut.title = 'Testing';

        fixture.detectChanges();

        var title = fixture.debugElement.query(By.directive(LayoutAlignDirective));

        let titleText = title.children[0].nativeElement.innerText;

        expect(titleText).toBe(sut.title);
    });

    it('Component properly hides transclusion to begin', () => {

        expect(sut.isExpanded()).toBe(false);
    });
});

describe('MaterialExpandingTitleMatCardComponent Integration Tests', () => {

    let fixture: ComponentFixture<ExpandingTitleMatCardTestComponent>;
    let sut: ExpandingTitleMatCardTestComponent;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialExpandingTitleMatCardModule,
                NoopAnimationsModule,
                MatCardModule
            ],
            declarations: [
                ExpandingTitleMatCardTestComponent
            ]
        });

        fixture = TestBed.createComponent(ExpandingTitleMatCardTestComponent);
        sut = fixture.componentInstance;
    });

    it('Component shows transcluded area if opened', () => {

        sut.transclusion = 'transclusion';

        fixture.detectChanges();

        // I'm not sure how to validate visibility here, the piece is hidden, but it still finds it
        //var content = fixture.debugElement.query(By.directive(MatCardContent));
        //expect(content).toBe(null);

        let childComponentFixture: DebugElement =
            fixture.debugElement.query(By.directive(MaterialExpandingTitleMatCardComponent));

        let childComponent: MaterialExpandingTitleMatCardComponent = childComponentFixture.componentInstance;

        expect(childComponent.isExpanded()).toBe(false);

        childComponent.toggleExpand();

        fixture.detectChanges();

        expect(childComponent.isExpanded()).toBe(true);

        var content = fixture.debugElement.query(By.directive(MatCardContent));
        expect(content.nativeElement.innerText).toBe(sut.transclusion);
    });
});


@Component({
    selector: 'iam-material-expanding-title-mat-card-test',
    template: '<ivy-expanding-title-mat-card [title]="\'title\'"><mat-card-content>{{transclusion}}</mat-card-content></ivy-expanding-title-mat-card>'
})
export class ExpandingTitleMatCardTestComponent {

    @Input()
    transclusion: string;
}