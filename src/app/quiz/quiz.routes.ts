import { Routes } from '@angular/router';

import { QuizComponent } from './quiz.component';
import { QuestionComponent } from './question.component';
import { EndComponent } from './end.component';

export const QuizRoutes: Routes = [
    { path: 'quiz',  component: QuizComponent },
    { path: 'quiz/question', component: QuestionComponent },
    { path: 'quiz/end', component: EndComponent }
];
