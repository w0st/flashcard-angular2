import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { GroupService } from '../group/group.service';
import { Group } from '../group/group';
import { QuizService } from './quiz.service';
import { Card } from '../card/card';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/quiz/quiz.html',
})
export class QuizComponent implements OnInit {
    groups: Group[];
    warning: boolean;

    constructor(private groupService: GroupService,
                private quizService: QuizService,
                private router: Router) {
    }

    getGroups(): void {
        this.groupService.getGroups()
            .then(result => this.groups = result);
    }

    ngOnInit(): void {
        this.getGroups();
    }

    setWarning(value: boolean): void {
        this.warning = value;
    }

    start(): void {
        let that = this;
        let promises = [];
        _.each(
            _.filter(this.groups, {checked: true}),
            function(group: Group) {
                promises.push(that.groupService.getGroup(group.id));
            });
        Promise.all(promises).then((results: any[]) => {
            let cards: Card[] = [];
            _.each(results, function(group: Group) {
                cards = cards.concat(group.cards);
            });
            that.quizService.init(cards);
            that.router.navigate(['/quiz/question']);
        });

    }

    anyChecked(): boolean {
        return _.some(this.groups, {checked: true});
    }

}
