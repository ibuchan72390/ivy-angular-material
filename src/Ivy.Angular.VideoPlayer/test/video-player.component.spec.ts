import 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';

import { IvyAngularVideoPlayerModule } from '../ivy.angular.video-player.module';

import { VideoPlayerComponent } from '../src/Components/VideoPlayer/video-player.component';

describe('VideoPlayerComponent', () => {

    // Variables
    let fixture: ComponentFixture<VideoPlayerComponent>;
    let sut: VideoPlayerComponent;


    // Setup
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                IvyAngularVideoPlayerModule
            ]
        });

        fixture = TestBed.createComponent(VideoPlayerComponent);
        sut = fixture.componentInstance;
    });


    // Tests
    //it('Sample Test', () => {
    //});
});