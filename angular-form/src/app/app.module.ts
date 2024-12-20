import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplateFormComponent } from './component/template_forms/template-form/template-form.component';
import { ReactiveFormComponent } from './component/reactive_forms/reactive-form/reactive-form.component';
import { HeaderComponent } from './component/common/header/header.component';
import { LayoutComponent } from './component/common/layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTaskTemplateFormComponent } from './component/template_forms/add-task-template-form/add-task-template-form.component';
import { UpdateTaskTemplateFormComponent } from './component/template_forms/update-task-template-form/update-task-template-form.component';
import { DeleteTaskTemplateFormComponent } from './component/template_forms/delete-task-template-form/delete-task-template-form.component';
import { ViewTaskComponent } from './component/template_forms/view-task/view-task.component';
import { ExerciseComponent } from './component/exercise/exercise.component';
@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    HeaderComponent,
    LayoutComponent,
    AddTaskTemplateFormComponent,
    UpdateTaskTemplateFormComponent,
    DeleteTaskTemplateFormComponent,
    ViewTaskComponent,
    ExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
