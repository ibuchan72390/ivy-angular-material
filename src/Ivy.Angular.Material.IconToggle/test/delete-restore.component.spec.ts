import 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { MatIcon } from '@angular/material';

import { IvyAngularMaterialIconToggleModule } from '../ivy.angular.material.icon-toggle.module';

import { IvyAngularMaterialDeleteRestoreComponent } from '../src/Components/DeleteRestore/delete-restore.component';

describe('IvyAngularMaterialDeleteRestoreComponent', () => {

    // Variables
    let fixture: ComponentFixture<IvyAngularMaterialDeleteRestoreComponent>;
    let sut: IvyAngularMaterialDeleteRestoreComponent;


    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialIconToggleModule
            ]
        });

        fixture = TestBed.createComponent(IvyAngularMaterialDeleteRestoreComponent);
        sut = fixture.componentInstance;

        fixture.detectChanges();
    });


    // Tests
    it('DeleteRestore renders the delete icon to begin', () => {

        let iconElem = fixture.debugElement.query(By.directive(MatIcon));

        expect(iconElem.nativeElement.innerText).toBe('delete');
    });

    it('DeleteRestore renders the restore icon after click', () => {

        let iconElem = fixture.debugElement.query(By.directive(MatIcon));

        expect(iconElem.nativeElement.innerText).toBe('delete');

        let iconBtn = fixture.debugElement.children[0];

        let deleted: boolean = false;
        sut.onDelete.subscribe(() => deleted = true);

        expect(deleted).toBeFalsy()

        iconBtn.triggerEventHandler('click', {});

        expect(deleted).toBeTruthy()

        // Need to update view per the new click
        fixture.detectChanges();

        iconBtn = fixture.debugElement.children[0];

        expect(iconBtn.nativeElement.innerText).toBe('refresh');
    });

    it('DeleteRestore renders the delete icon after clicking the restore icon', () => {

        let iconElem = fixture.debugElement.query(By.directive(MatIcon));

        expect(iconElem.nativeElement.innerText).toBe('delete');

        let iconBtn = fixture.debugElement.children[0];

        let refreshed: number = 0;
        sut.onRestore.subscribe(() => refreshed++);

        let deleted: number = 0;
        sut.onDelete.subscribe(() => deleted++);

        expect(deleted).toBe(0);

        iconBtn.triggerEventHandler('click', {});

        expect(deleted).toBe(1);
        expect(refreshed).toBe(0);

        // Need to update view per the new click
        fixture.detectChanges();

        iconBtn = fixture.debugElement.children[0];

        expect(iconBtn.nativeElement.innerText).toBe('refresh');

        iconBtn.triggerEventHandler('click', {});

        expect(deleted).toBe(1);
        expect(refreshed).toBe(1);

        // Need to update view per the new click
        fixture.detectChanges();

        iconBtn = fixture.debugElement.children[0];

        expect(iconBtn.nativeElement.innerText).toBe('delete');
    });
});