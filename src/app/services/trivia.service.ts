import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {
  TriviaQuestionParams,
  TriviaQuestionsResponse,
} from '../models/trivia-question.interfaces';

@Injectable()
export class TriviaService {
  private readonly TRIVIA_API_URL = 'https://opentdb.com/api.php';
  constructor(private http: HttpClient) {}

  getQuestions(
    triviaQuestionParams: Partial<TriviaQuestionParams>
  ): Observable<TriviaQuestionsResponse> {
    return this.http
      .get<TriviaQuestionsResponse>(`${this.TRIVIA_API_URL}`, {
        params: {
          ...triviaQuestionParams,
        },
      })
      .pipe(map(response => {
        response.results.forEach(question => question.all_answers = [...question.incorrect_answers, question.correct_answer])
        return response;
      }));
  }
}
