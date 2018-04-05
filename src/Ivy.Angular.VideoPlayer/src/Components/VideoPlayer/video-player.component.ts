declare var require: any;

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ivy-video-player',
    templateUrl: './video-player.component.html'
})
export class VideoPlayerComponent {

    // At some point, we should make this a model with a URL / MPEG Type
    @Input() sources: string[] = [];

    @Output() onReady: EventEmitter<any> = new EventEmitter<any>();
    @Output() onLoad: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    onPlayerReady(event: any) {

        this.onReady.emit(event);
    }

    onLoadEvent(event: any) {

        this.onLoad.emit(event);
    }
}