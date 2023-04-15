import {TriviaQuestionDifficulty, TriviaQuestionType} from "./trivia-question.types";

export interface TriviaQuestionsResponse {
  response_code: number;
  results: TriviaQuestion[];
}

export interface TriviaQuestionParams {
  amount: number;
  category: number;
  difficulty: TriviaQuestionDifficulty;
  type: TriviaQuestionType;
}

export interface TriviaQuestion {
  category: string;
  type: TriviaQuestionType;
  difficulty: TriviaQuestionDifficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  all_answers?: string[];
}
