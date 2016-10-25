import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Card } from '../card/card';


@Injectable()
export class QuizService {
    cards: Card[];
    incorrectCards: Card[];
    correct: number;
    current: number;
    total: number;

    init(cards: Array<Card>): void {
        this.cards = _.shuffle(cards);
        console.log('set = ', cards);
        this.correct = 0;
        this.current = 0;
        this.total = cards.length;
        this.incorrectCards = [];
    }

    getCurrentCard(): Card {
        return this.cards[this.current];
    }

    getCurrent(): number {
        return this.current;
    }

    getTotal(): number {
        return this.total;
    }

    getCorrect(): number {
        return this.correct;
    }

    getIncorrectCards(): Card[] {
        return this.incorrectCards;
    }

    answer(word: string): boolean {
        // check front or back
        let result: boolean = this.cards[this.current].back === word;
        if (result) {
            this.correct += 1;
        } else {
            this.incorrectCards.push(this.cards[this.current]);
        }
        this.current += 1;
        return result;
    }

}
