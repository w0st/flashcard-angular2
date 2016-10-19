import { Component, OnInit } from '@angular/core';
import { GroupService } from './group.service';
import { Group } from './group';
import { Card } from '../card/card';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'app/group/group.html'
})
export class GroupComponent implements OnInit {

    private group: Group;
    private cards: Card[];

    constructor(private route: ActivatedRoute, private groupService: GroupService) {
    }

    getGroup(): void {
        this.route.params.subscribe((params: {id: string}) => {
            let id = Number.parseInt(params.id);
            this.groupService.getGroup(id)
                .then(result => {
                    this.group = result;
                    this.cards = this.group.cards;
                });
        });

    }

    ngOnInit(): void {
        this.getGroup();
    }

}
