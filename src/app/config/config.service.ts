import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    URL_API = 'http://localhost:3000/';

    constructor() {
        if (window.location.href.indexOf('localhost') === -1) {
            this.URL_API = 'http://flashcard-rails.herokuapp.com/';
        }
    }
}
