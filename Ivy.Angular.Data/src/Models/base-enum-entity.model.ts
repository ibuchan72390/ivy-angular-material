import { BaseEntity } from './base-entity.model';

export class BaseEnumEntity extends BaseEntity {
    name: string;
    friendlyName: string;
    sortOrder: number;
}