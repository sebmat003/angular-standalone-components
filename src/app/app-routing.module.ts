import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'question-generator',
    pathMatch: 'full'
  },
  {
    path: 'question-generator',
    loadComponent: () =>
      import(
        './containers/question-generator/question-generator.component'
      ).then((c) => c.QuestionGeneratorComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
