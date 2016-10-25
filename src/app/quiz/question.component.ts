import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from './quiz.service';
import { Card } from '../card/card';

@Component({
    templateUrl: 'app/quiz/question.html',
})
export class QuestionComponent {
    card: Card;
    answer: string;
    isCorrect: boolean;
    isChecked: boolean;
    all: number;
    current: number;

    constructor(private quizService: QuizService, private router: Router) {
        this.card = quizService.getCurrentCard();
        this.all = this.quizService.getTotal();
        this.updateStatus();
    }

    check(): void {
        if (!this.isChecked) {
            this.isCorrect = this.quizService.answer(this.answer);
            this.isChecked = true;
        }
    }

    updateStatus(): void {
        this.current = this.quizService.getCurrent() + 1;
    }

    next(): void {
        if (this.quizService.getCurrent() < this.quizService.getTotal()) {
            this.answer = '';
            this.isChecked = false;
            this.card = this.quizService.getCurrentCard();
            this.updateStatus();
        } else {
            this.router.navigate(['/quiz/end']);
        }
    }

}
