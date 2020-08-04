import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterStudentComponent } from './register-student/register-student.component';


const routes: Routes = [{
  path: '',
  component: RegisterStudentComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterStudentRoutingModule { }
