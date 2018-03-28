import 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';

import { IvyAngularMaterialCounterIconModule } from '../ivy.angular.material.counter-icon.module';

import { MaterialCounterIconComponent } from '../src/Components/CounterIcon/counter-icon.component';

describe('MaterialCounterIconComponent', () => {

    // Variables
    let fixture: ComponentFixture<MaterialCounterIconComponent>;
    let sut: MaterialCounterIconComponent;


    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialCounterIconModule
            ]
        });

        fixture = TestBed.createComponent(MaterialCounterIconComponent);
        sut = fixture.componentInstance;
    });


    // Tests
    it('Icon text is bound to the matIcon component', () => {

        sut.icon = 'warning';

        fixture.detectChanges();

        let iconElem = fixture.debugElement.nativeElement.querySelector('mat-icon');

        expect(iconElem.innerText).toBe(sut.icon);
    });

    it('counter is not visible if count is 0', () => {

        sut.counter = 0;

        fixture.detectChanges()

        expect(sut.showCounter()).toBe(false);

        let counterElem = fixture.debugElement.nativeElement.querySelector('.counter');

        expect(counterElem).toBe(null);
    });

    it('counter is visible if count is greater than 0', () => {

        sut.counter = 10;

        fixture.detectChanges()

        expect(sut.showCounter()).toBe(true);

        let counterElem = fixture.debugElement.nativeElement.querySelector('.counter');

        expect(counterElem).not.toBe(null);
    });
});