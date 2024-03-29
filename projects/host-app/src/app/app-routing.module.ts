import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
      path:"",
      component: HomeComponent,
      pathMatch:'full'  },
      {
        path: "to-do-list",
        loadChildren: () => import('mfe-ap/TodoListModule').then((m)=>{return m.TodoListModule})
      }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
