import 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { By } from '@angular/platform-browser';
import { MatSidenav } from '@angular/material';
import { FlexFillDirective } from '@angular/flex-layout';

import { IvyWebModule } from 'ivy.angular.web';
import { IvyMaterialHelpersModule } from 'ivy.angular.material.helpers';

import { IvyAngularMaterialDynamicSideNavModule } from '../ivy.angular.material.dynamic-side-nav.module';

import { MaterialDynamicSideNavComponent } from '../src/Components/DynamicSideNav/dynamic-side-nav.component';
import { DynamicSideNavService } from '../src/Services/dynamic-side-nav.service';

describe('MaterialDynamicSideNavComponent', () => {

    // Variables
    let fixture: ComponentFixture<MaterialDynamicSideNavComponent>;
    let sut: MaterialDynamicSideNavComponent;


    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularMaterialDynamicSideNavModule,
                IvyAngularMaterialDynamicSideNavModule.forRoot(),
                IvyMaterialHelpersModule,
                IvyWebModule,
                BrowserAnimationsModule
            ]
        });

        fixture = TestBed.createComponent(MaterialDynamicSideNavComponent);
        sut = fixture.componentInstance;
    });


    // Tests
    it('Container has fxFlexFill', () => {

        let container = fixture.debugElement.query(By.directive(FlexFillDirective));

        expect(container).not.toBe(null);
    });

    it('Side nav mode is assigned correctly', () => {

        const mode: string = 'side';

        let sideNavSvc: DynamicSideNavService = TestBed.get(DynamicSideNavService);

        spyOn(sideNavSvc, 'getSidenavMode').and.returnValue(mode);

        fixture.detectChanges();

        let sideNav = fixture.debugElement.query(By.directive(MatSidenav));

        expect(sideNav.nativeElement.attributes['ng-reflect-mode'].value).toBe(mode);

        // Once for initial assignment, once again for detectChanges
        expect(sideNavSvc.getSidenavMode).toHaveBeenCalledTimes(2);
    });

    it('Side nav open is assigned correctly', () => {

        const open: boolean = true;

        let sideNavSvc: DynamicSideNavService = TestBed.get(DynamicSideNavService);

        spyOn(sideNavSvc, 'isOpen').and.returnValue(open);

        fixture.detectChanges();

        let sideNav = fixture.debugElement.query(By.directive(MatSidenav));

        expect(sideNav.nativeElement.attributes['ng-reflect-opened'].value).toBe('true');

        // Once for initial assignment, once again for detectChanges
        expect(sideNavSvc.isOpen).toHaveBeenCalledTimes(2);
    });

    it('Side nav close executes as expected', () => {

        let sideNavSvc: DynamicSideNavService = TestBed.get(DynamicSideNavService);

        spyOn(sideNavSvc, 'setIsOpen');

        fixture.detectChanges();

        let sideNav = fixture.debugElement.query(By.directive(MatSidenav));

        sideNav.triggerEventHandler('close', {});

        // Once for initial assignment, once again for detectChanges
        expect(sideNavSvc.setIsOpen).toHaveBeenCalledTimes(1);
        expect(sideNavSvc.setIsOpen).toHaveBeenCalledWith(false);
    });
});