import { Component, OnInit } from '@angular/core';
import { GroupService } from './group.service';
import { Group } from './group';

@Component({
    templateUrl: 'app/group/groups.html',
})
export class GroupsComponent implements OnInit {
    groups: Group[];
    errorMessage: string;

    constructor(private groupService: GroupService) {
    }

    getGroups(): void {
        this.groupService.getGroups()
            .then(result => this.groups = result);
    }

    ngOnInit(): void {
        this.getGroups();
    }

}
