/*
 * Gahhhhh, I fucking hate doing these copy paste moves....
 * Need to find a way to start leveraging the NPM package system
 * We'll be able to create and publish packages to a private NPM stream
 * Then I can share certain aspects of these libraries in both projects with a single source of truth
 */

import { BaseEntityWithTypedId } from './base-entity-with-typed-id.model';

export class BaseEntity extends BaseEntityWithTypedId<number> {
}