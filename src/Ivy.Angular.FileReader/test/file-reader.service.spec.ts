import 'jasmine';

import { TestBed } from '@angular/core/testing';

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
    it('fileToBase64String executes as expected with input', () => {

        spyOn(sut.reader, 'readAsDataURL');
        spyOn(sut.reader, 'addEventListener');

        let file = {};

        let result: string = null;
        sut.fileToBase64String(file).subscribe(emit => result = emit);

        expect(sut.reader.readAsDataURL).toHaveBeenCalledTimes(1);
        expect(sut.reader.readAsDataURL).toHaveBeenCalledWith(file);

        expect(sut.reader.addEventListener).toHaveBeenCalledTimes(1);
    });

    it('fileToBase64String properly executes the load event listener', () => {

        spyOn(sut.reader, 'readAsDataURL');

        let file = {};

        let result: string = null;
        sut.fileToBase64String(file).subscribe(emit => result = emit);

        expect(sut.reader.readAsDataURL).toHaveBeenCalledTimes(1);
        expect(sut.reader.readAsDataURL).toHaveBeenCalledWith(file);

        expect(result).toBe(null);

        let eventObj: any = new Event('load');
        let target = {
            result: 'TESTING'
        };

        let targetSpy = spyOnProperty(eventObj, 'target', 'get').and.returnValue(target);

        sut.reader.dispatchEvent(eventObj);

        expect(result).toBe(target.result);

        expect(targetSpy).toHaveBeenCalledTimes(1);
    });
});