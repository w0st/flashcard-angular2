import { Component } from '@angular/core';
import { QuizService } from './quiz.service';
import { Card } from '../card/card';

@Component({
    templateUrl: 'app/quiz/end.html'
})
export class EndComponent {
    correct: number;
    total: number;
    answered: number;
    incorrectCards: Card[];

    constructor(private quizService: QuizService) {
        this.correct = quizService.getCorrect();
        this.total = quizService.getTotal();
        this.answered = quizService.getCurrent();
        this.incorrectCards = quizService.getIncorrectCards();
    }
}
