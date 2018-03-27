import 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';

import { IvyAngular<%= name %>Module } from '../ivy.angular.<%= moduleName %>.module';

import { <%= name %>Component } from '../src/Components/<%= name %>/<%= moduleName %>.component';

describe('<%= name %>', () => {

    // Variables
    let fixture: ComponentFixture<<%= name %>Component>;
    let sut: <%= name %>Component;


    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngular<%= name %>Module
            ]
        });

        fixture = TestBed.createComponent(<%= name %>Component);
        sut = fixture.componentInstance;
    });


    // Tests
    //it('Sample Test', () => {
    //});
});