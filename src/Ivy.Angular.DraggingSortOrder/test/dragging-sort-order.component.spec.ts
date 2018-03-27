import 'jasmine';

import { EventEmitter } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { DragulaService, DragulaModule } from 'ng2-dragula/ng2-dragula';

import { SortOrder } from 'ivy.angular.data';

import { IvyAngularDraggingSortOrderModule } from '../ivy.angular.dragging-sort-order.module';

import { DraggingSortOrderComponent } from '../src/Components/DraggingSortOrder/dragging-sort-order.component';

describe('DraggingSortOrder', () => {

    // Variables
    let fixture: ComponentFixture<DraggingSortOrderComponent>;
    let sut: DraggingSortOrderComponent;


    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularDraggingSortOrderModule
            ]
        });

        fixture = TestBed.createComponent(DraggingSortOrderComponent);
        sut = fixture.componentInstance;
    });


    // Tests
    it('DraggingSortOrder reworks the sorted items to ascending order when dragula event fires', () => {

        // This may not be swapping our properly in time before constructor
        let dragEventEmitter = new EventEmitter<void>();
        let dragSvc = TestBed.get(DragulaService);
        dragSvc.dropModel = dragEventEmitter;


        fixture = TestBed.createComponent(DraggingSortOrderComponent);
        sut = fixture.componentInstance;

        const toMake: number = 10;

        // Sorted in reverse order, should be in ascending order once the dragging sort order mechanism fires
        let sorteds: SortOrder[] = Array.from(new Array(toMake).keys()).map((val, index) => new SampleSortOrder(toMake - index));

        sut.sortedContent = sorteds;

        dragEventEmitter.emit();

        for (var i = 0; i < sut.sortedContent.length; i++) {
            let sortedItem = sut.sortedContent[i];

            expect(sortedItem.sortOrder).toBe(i);
        }
    });

    it('DraggingSortOrder prevents the default click action in place of dragula sorting functionality', () => {

        let event = new Event('click');

        spyOn(event, 'preventDefault');

        sut.onClick(event);

        expect(event.preventDefault).toHaveBeenCalledTimes(1);
    });
});


class SampleSortOrder implements SortOrder {

    constructor(sort: number) {
        this.sortOrder = sort;
    }

    sortOrder: number;
}