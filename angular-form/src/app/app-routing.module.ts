import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './component/common/layout/layout.component';
import { TemplateFormComponent } from './component/template_forms/template-form/template-form.component';
import { ReactiveFormComponent } from './component/reactive_forms/reactive-form/reactive-form.component';
import { AddTaskTemplateFormComponent } from './component/template_forms/add-task-template-form/add-task-template-form.component';
import { UpdateTaskTemplateFormComponent } from './component/template_forms/update-task-template-form/update-task-template-form.component';
import { DeleteTaskTemplateFormComponent } from './component/template_forms/delete-task-template-form/delete-task-template-form.component';
import { ExerciseComponent } from './component/exercise/exercise.component';
import { ViewTaskComponent } from './component/template_forms/view-task/view-task.component';

const routes: Routes = [
  {
    path: '' ,component: LayoutComponent , children:[
      {
        path: 'template' , component: TemplateFormComponent
      },
      {
        path: 'reactive' , component: ReactiveFormComponent
      },
      {
        path: 'add' , component: AddTaskTemplateFormComponent
      },
      {
        path: 'update' , component: UpdateTaskTemplateFormComponent
      },
      {
        path: 'delete' , component: DeleteTaskTemplateFormComponent
      },
      {
        path: 'view' , component: ViewTaskComponent
      },
      {
        path: 'exercise' , component: ExerciseComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
