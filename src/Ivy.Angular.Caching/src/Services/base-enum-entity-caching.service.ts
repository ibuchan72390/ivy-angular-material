// 3rd Party
import { Observable, Observer } from 'rxjs';

// Services
import { BaseEntityCachingService } from './base-entity-caching.service';

// Models
import { BaseEnumEntity } from 'ivy.angular.data';
import { CollectionHelper } from 'ivy.angular.value-helpers';

export abstract class BaseEnumEntityCachingService<TEntity extends BaseEnumEntity> extends BaseEntityCachingService<TEntity> {

    constructor(
        collSvc: CollectionHelper) {

        super(collSvc);
    }


    // This is a fucking stupid wrapper for collSvc.getEnumEntityByName()
    //getConfigFromCollection(coll: TEntity[], key: string): TEntity {
    //    return this.collSvc.getEnumEntityByName(coll, key);
    //}

    getCachedConfig(key: string): Observable<TEntity> {

        return Observable.create((observer: Observer<TEntity>) => {
            this.getCache().subscribe(
                (cache: TEntity[]) => {
                    observer.next(this.collSvc.getEnumEntityByName(cache, key));
                    observer.complete();
                }
            );
        });
    }

    getCachedConfigs(keys: string[]): Observable<TEntity[]> {

        return Observable.create((observer: Observer<TEntity[]>) => {
            this.getCache().subscribe(
                (cache: TEntity[]) => {
                    let filteredItems = cache.filter(x => keys.indexOf(x.name) > -1);
                    observer.next(filteredItems);
                    observer.complete();
                }
            );
        });
    }
}