import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportCardRoutingModule } from './report-card-routing.module';
import { ReportCardComponent } from './report-card/report-card.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [ReportCardComponent],
  imports: [
    CommonModule,
    ReportCardRoutingModule,
    MatListModule
  ]
})
export class ReportCardModule { }
