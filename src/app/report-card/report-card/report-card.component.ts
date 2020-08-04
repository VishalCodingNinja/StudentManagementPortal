import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.css']
})
export class ReportCardComponent implements OnInit {
 students = [];
  constructor() { }

  ngOnInit(): void {
    this.students = JSON.parse(localStorage.getItem('students'));
    console.log('retrievedObject: ', this.students);
  }
  generatePdf(id) {
    const students = JSON.parse(localStorage.getItem('students'));
   // var studentDetail = students.find(id);
    const documentDefinition = { content: students[0] };

    pdfMake.createPdf(documentDefinition).download();
  }
}
