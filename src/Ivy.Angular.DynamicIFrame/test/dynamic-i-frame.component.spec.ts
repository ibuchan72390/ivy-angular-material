import 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing'

import { IvyAngularDynamicIFrameModule } from '../ivy.angular.dynamic-i-frame.module';
import { IvyValueHelpersModule } from 'ivy.angular.value-helpers';

import { DynamicIFrameComponent } from '../src/Components/DynamicIFrame/dynamic-i-frame.component';

import { OsDetectionService, MobileDetectionService } from 'ivy.angular.web';

describe('DynamicIFrameComponent', () => {

    // Variables
    let fixture: ComponentFixture<DynamicIFrameComponent>;
    let sut: DynamicIFrameComponent;

    // Should be same as test url
    const imageAddr: string = 'http://localhost:9876';

    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularDynamicIFrameModule,
                IvyValueHelpersModule.forRoot()
            ]
        });

        fixture = TestBed.createComponent(DynamicIFrameComponent);
        sut = fixture.componentInstance;
    });


    // Tests
    it('DynamicIFrame displays nothing when iframe src is null', () => {

        sut.src = null;

        expect(() => sut.ngOnInit()).toThrow('DynamicIFrame must have src before it is initialized!');
    });

    it('DynamicIFrame displays nothing when iframe src is empty', () => {

        sut.src = '';

        expect(() => sut.ngOnInit()).toThrow('DynamicIFrame must have src before it is initialized!');
    });

    it('DynamicIFrame displays video-container-wrapper class for standard IFrame if not mac', () => {

        let osDetector = TestBed.get(OsDetectionService);
        spyOn(osDetector, 'isMac').and.returnValue(false);

        let mobileDetector = TestBed.get(MobileDetectionService);
        spyOn(mobileDetector, 'isMobile').and.returnValue(false);

        sut.src = imageAddr;

        fixture.detectChanges();

        expect(sut.useCustomIFrame()).toBe(false);

        expect(mobileDetector.isMobile).not.toHaveBeenCalled();

        let expectedElem = fixture.debugElement.nativeElement.querySelector('.video-container-wrapper');
        expect(expectedElem).not.toBe(null);

        let unexpectedElem = fixture.debugElement.nativeElement.querySelector('.scroll-wrapper');
        expect(unexpectedElem).toBe(null);
    });

    it('DynamicIFrame displays video-container-wrapper class for standard IFrame if mac and not mobile', () => {

        let osDetector = TestBed.get(OsDetectionService);
        spyOn(osDetector, 'isMac').and.returnValue(true);

        let mobileDetector = TestBed.get(MobileDetectionService);
        spyOn(mobileDetector, 'isMobile').and.returnValue(false);

        sut.src = imageAddr;

        fixture.detectChanges();

        expect(sut.useCustomIFrame()).toBe(false);

        let expectedElem = fixture.debugElement.nativeElement.querySelector('.video-container-wrapper');
        expect(expectedElem).not.toBe(null);

        let unexpectedElem = fixture.debugElement.nativeElement.querySelector('.scroll-wrapper');
        expect(unexpectedElem).toBe(null);
    });

    it('DynamicIFrame displays scroll-wrapper class for custom IFrame if mac and mobile', () => {

        let osDetector = TestBed.get(OsDetectionService);
        spyOn(osDetector, 'isMac').and.returnValue(true);

        let mobileDetector = TestBed.get(MobileDetectionService);
        spyOn(mobileDetector, 'isMobile').and.returnValue(true);

        sut.src = imageAddr;

        fixture.detectChanges();

        expect(sut.useCustomIFrame()).toBe(true);

        let expectedElem = fixture.debugElement.nativeElement.querySelector('.scroll-wrapper');
        expect(expectedElem).not.toBe(null);

        let unexpectedElem = fixture.debugElement.nativeElement.querySelector('.video-container-wrapper');
        expect(unexpectedElem).toBe(null);
    });
});