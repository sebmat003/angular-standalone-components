import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../../services/trivia.service';
import { TriviaQuestion } from '../../models/trivia-question.interfaces';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule],
  providers: [TriviaService],
  selector: 'app-question-generator',
  templateUrl: './question-generator.component.html',
  styleUrls: ['./question-generator.component.scss'],
})
export class QuestionGeneratorComponent implements OnInit {
  question$: Observable<TriviaQuestion>;

  constructor(private triviaService: TriviaService) {}

  ngOnInit() {
    this.question$ = this.triviaService
      .getQuestions({
        amount: 1,
        type: 'multiple',
      })
      .pipe(map((res) => res.results[0]));
  }
}
