import { Component, Input } from '@angular/core';

/**
 * Example of use:
 * fc-flipcard [front]="'front text'" [back]="'back text'"
 */
@Component({
    selector: 'fc-flipcard',
    templateUrl: 'app/flipcard/flipcard.html'
})
export class FlipcardComponent {
    flipped: boolean;
    @Input() front: string;
    @Input() back: string;

    constructor() {
        this.flipped = false;
    }

    reverse() {
        this.flipped = ! this.flipped;
    }

}
