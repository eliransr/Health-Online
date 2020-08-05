import { ImageService } from './../../services/image.service';
import { DiagnosisserviceService } from './../../services/diagnosisservice.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(public diagnosisserviceService:DiagnosisserviceService,public imageService:ImageService) { }

  category:string = "Loading...";
  categoryImage:string;

  ngOnInit(){
    this.diagnosisserviceService.diagnosis().subscribe(
      res => {
        this.category = this.diagnosisserviceService.categories[res];
        this.categoryImage = this.imageService.images[res];
      }
    )
  }

}
