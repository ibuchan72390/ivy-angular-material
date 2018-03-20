import { Component, Input } from '@angular/core';

@Component({
    selector: 'ivy-loading-spinner',
    templateUrl: './loading-spinner.component.html'
})
export class LoadingSpinnerComponent {

    @Input() isLoading: boolean;
}