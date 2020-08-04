import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'register-student',
  loadChildren: () => import('src/app/register-student/register-student.module').then(m => m.RegisterStudentModule)
},
{
  path: 'report-card',
  loadChildren: () => import('src/app/report-card/report-card.module').then(m => m.ReportCardModule)
},
{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
