import { QuizService } from './quiz.service';

describe('QuizService', () => {

    let quizService: QuizService = new QuizService();
    let cards = [
        {front: 'yellow', back: 'żółty'},
        {front: 'black', back: 'czarny'}
    ];

    beforeEach(() => {
        quizService.init(cards);
    });

    it('should init properly', () => {
        expect(quizService.getCurrent()).toBe(0);
        expect(quizService.getTotal()).toBe(2);
    });

    it('should count answers', () => {
        let firstCard = quizService.getCurrentCard();
        quizService.answer(firstCard.back);
        expect(quizService.getCorrect()).toBe(1);
        expect(quizService.getIncorrectCards()).toEqual([]);
        let secondCard = quizService.getCurrentCard();
        // intentionally bad answer
        quizService.answer(firstCard.back);
        expect(quizService.getIncorrectCards()).toEqual(jasmine.arrayContaining([secondCard]));
        expect(quizService.getCorrect()).toBe(1);
        expect(quizService.getTotal()).toBe(2);
    });
});
