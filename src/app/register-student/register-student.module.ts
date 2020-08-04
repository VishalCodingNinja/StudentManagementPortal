import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterStudentRoutingModule } from './register-student-routing.module';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [RegisterStudentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RegisterStudentRoutingModule,
  ]
})
export class RegisterStudentModule { }
