import { NgModule } from '@angular/core';
import { QuizComponent } from './quiz.component';
import { QuizService } from './quiz.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { QuestionComponent } from './question.component';
import { EndComponent } from './end.component';
import { RouterModule } from '@angular/router';
import { FlipcardModule } from '../flipcard/flipcard.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        FlipcardModule
    ],
    declarations: [
        QuizComponent,
        QuestionComponent,
        EndComponent
    ],
    providers: [
        QuizService
    ],
    exports: [
    ]
})
export class QuizModule {
}
