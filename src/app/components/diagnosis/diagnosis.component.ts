import { DiagnosisserviceService } from './../../services/diagnosisservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {

  text:string;
  
  constructor(private diagnosisserviceService:DiagnosisserviceService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.diagnosisserviceService.doc=this.text;
    this.router.navigate(['/results']);
  }

}
