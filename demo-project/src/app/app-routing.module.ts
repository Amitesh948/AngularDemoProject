import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/common/layout/layout.component';
import { CounterComponent } from './components/counter/counter.component';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
