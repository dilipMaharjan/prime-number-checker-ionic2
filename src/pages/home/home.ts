import {Component} from '@angular/core';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    inputNumber; i;
    result() {
        if (this.inputNumber >= 2) {
            for (this.i = 2; this.i < this.inputNumber; this.i++) {
                if (this.inputNumber % this.i == 0) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
}
