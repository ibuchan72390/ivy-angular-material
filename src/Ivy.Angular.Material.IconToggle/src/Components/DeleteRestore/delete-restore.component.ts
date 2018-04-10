declare var require: any;

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ivy-material-delete-restore',
    templateUrl: './delete-restore.component.html'
})
export class IvyAngularMaterialDeleteRestoreComponent {

    // Variables
    isDeleted: boolean = false;

    @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
    @Output() onRestore: EventEmitter<any> = new EventEmitter<any>();


    // Methods
    delete(): void {
        this.onDelete.emit();
        this.isDeleted = true;
    }

    restore(): void {
        this.onRestore.emit();
        this.isDeleted = false;
    }
}