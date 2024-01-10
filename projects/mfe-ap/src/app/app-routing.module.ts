import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListModule } from './todo-list/todo-list.module';

const routes: Routes = [
  {path:"", redirectTo:"todo-mfe",pathMatch: "full"},
  {path:'todo-mfe', component: TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
