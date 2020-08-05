import { MedicinesRaw } from './../../interfaces/medicines-raw';
import { AuthService } from 'src/app/services/auth.service';
import { StoreService } from './../../services/store.service';
import { Blogmedicines } from './../../interfaces/blogmedicines';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements OnInit {

  panelOpenState = false;
  Medicines$:Blogmedicines[]=[];
  userId:string;
  info:string;
  MedicationId:number;
  errorMessage:string; 
  hasError:Boolean = false;
  //data$:Observable<Blogmedicines>;
  nameVar:String;
  data$:Observable<any[]>;
  constructor(private storeService:StoreService,private router:Router,public authservice:AuthService) { }

  ngOnInit(){
    this.data$ = this.storeService.getMedicatios();

    //  this.storeService.searchData().subscribe(
    //    data => {
    //     console.log("drug name:",data);
    //     this.Medicines$.push(data as unknown as Blogmedicines)
    //  })

      //  this.data$ = this.storeService.searchData();
      //   this.data$.subscribe(
      //  data1 => {
      //      console.log("drug name second method:",data1)
      //     this.nameVar = data1.Name;
      //    },
      //  )

    // this.storeService.getMedicatios().subscribe(
    //   data =>{
    //     this.Medicines$ = data
    //     console.log(data)
    //   }) 


    this.authservice.user.subscribe(
      user => {
        this.userId = user.uid;
      }
    )

    error =>{
      console.log("in the component" + error.message);
      this.hasError = true; 
      this.errorMessage = error.message; 
    } 
  }

  addMedicatios(name:string,description:string,price:number){
    this.storeService.addMedicatios_To_Firebase(this.userId,name,description,price)
    this.info = "The Medication add to your cart"
}

}
