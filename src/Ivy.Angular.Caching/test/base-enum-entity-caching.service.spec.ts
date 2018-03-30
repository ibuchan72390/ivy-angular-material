import 'jasmine';

import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Subscription, Observable, Observer } from 'rxjs';

import { IvyValueHelpersModule, CollectionHelper } from 'ivy.angular.value-helpers';
import { BaseEnumEntity } from 'ivy.angular.data';

import { BaseEnumEntityCachingService } from '../src/Services/base-enum-entity-caching.service';

describe('BaseEnumEntityCachingService', () => {

    // Variables
    let svc: TestEnumEntityCachingService;


    // Tests
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyValueHelpersModule
            ],
            providers: [
                TestEnumEntityCachingService
            ]
        });

        svc = TestBed.get(TestEnumEntityCachingService);
    });


    // getCachedConfig
    it('getCachedConfig returns matching config after init', () => {

        svc.externalInit();

        let entity: TestEnumEntity = null;
        const name = "1";

        svc.getCachedConfig(name).subscribe(
            result => entity = result
        );

        expect(entity).toBe(null);

        svc.completeInit().subscribe(
            result => {
                expect(entity.name).toBe(name);
            }
        );
    });

    it('getCachedConfig returns matching config if already init', () => {

        svc.externalInit();

        let entity: TestEnumEntity = null;
        const name = "1";

        svc.completeInit().subscribe(
            result => {

                svc.getCachedConfig(name).subscribe(
                    result => entity = result
                );

                expect(entity.name).toBe(name);
            }
        );
    });

    // getCachedConfigs
    it('getCachedConfig returns matching config after init', () => {

        svc.externalInit();

        const names = ['1', '2', '3'];

        let entities: TestEnumEntity[] = [];

        svc.getCachedConfigs(names).subscribe(
            result => entities = result
        );

        expect(entities.length).toBe(0);

        svc.completeInit().subscribe(
            result => {

                for (var i = 0; i < entities.length; i++) {
                    let entity = entities[i];

                    expect(names.filter(x => x == entity.name).length).toBe(1);
                }
            }
        );
    });

    it('getCachedConfig returns matching config if already init', () => {

        svc.externalInit();

        const names = ['1', '2', '3'];

        let entities: TestEnumEntity[] = [];

        svc.completeInit().subscribe(
            result => {

                svc.getCachedConfigs(names).subscribe(
                    result => entities = result
                );

                for (var i = 0; i < entities.length; i++) {
                    let entity = entities[i];

                    expect(names.filter(x => x == entity.name).length).toBe(1);
                }
            }
        );
    });

});


@Injectable()
class TestEnumEntityCachingService extends BaseEnumEntityCachingService<TestEnumEntity> {

    private initObserver: Observer<TestEnumEntity[]>;
    private initCount: number = 0;

    constructor(
        collSvc: CollectionHelper) {

        super(collSvc);
    }

    private initFn(): Observable<TestEnumEntity[]> {
        return Observable.create((observer: Observer<TestEnumEntity[]>) => {
            this.initObserver = observer;
        });
    }

    externalInit(): void {
        this.init(() => this.initFn());
    }

    completeInit(): Observable<void> {

        return Observable.create((observer: Observer<null>) => {

            this.initCount++;

            let entities = this.collSvc.range(5)
                .map(x => new TestEnumEntity());

            for (var i = 0; i < entities.length; i++) {
                let entity = entities[i];

                entity.id = i;
                entity.name = i.toString();
            }

            this.initObserver.next(entities);
            this.initObserver.complete();

            observer.next(null);
            observer.complete();
        });
    }

}

class TestEnumEntity extends BaseEnumEntity {
}
