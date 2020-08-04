import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportCardComponent } from './report-card/report-card.component';


const routes: Routes = [ {
  path: '',
  component: ReportCardComponent
} ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportCardRoutingModule { }
