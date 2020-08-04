import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      marksObtainsOutOf: ['', Validators.required]
    });
  }
  public onSubmit(): void {
    localStorage.clear();
console.log(this.loginForm.value);
//var testObject = { 'fi': 1, 'two': 2, 'three': 3 };
let students = JSON.parse(localStorage.getItem("students") || "[]");
// Put the object into storage
students.push(JSON.stringify(this.loginForm.value));
localStorage.setItem('students', JSON.stringify(students));
// Retrieve the object from storage
var retrievedObject = localStorage.getItem('students');
console.log('retrievedObject: ', JSON.parse(retrievedObject));
  }
}
