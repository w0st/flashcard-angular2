import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    URL_API = 'http://localhost:3000/';

    constructor() {
        console.log('configService!');
    }
}
