import 'jasmine';

import { TestBed } from '@angular/platform-browser/testing';

import { IvyAngularFileReaderModule } from '../ivy.angular.file-reader.module';

import { FileReaderService } from '../src/Services/file-reader.service';

describe('FileReaderService', () => {

    // Variables
    let sut: FileReaderService;


    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularFileReaderModule
            ]
        });

        sut = TestBed.get(FileReaderService);
    });


    // Tests
    //it('Sample Test', () => {
    //});
});