import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Group } from './group';
import { ConfigService } from './../config/index';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class GroupService {

    constructor(private http: Http, private configService: ConfigService) {
    }

    public getGroups(): Promise<Group[]> {
        return this.http.get(this.configService.URL_API + 'groups.json', { withCredentials: true })
            .toPromise()
            .then(response => response.json() as Group[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
