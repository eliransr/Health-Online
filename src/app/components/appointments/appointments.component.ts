import { AuthService } from 'src/app/services/auth.service';
import { AppointmentsService } from './../../services/appointments.service';
import { Component, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  positionOptions: TooltipPosition[] = ['above'];
  position = new FormControl(this.positionOptions[0]);
  category:string;
  typeOfTreatment:string;
  date:string;
  city:string;
  time:string;
  userId:string;
  id:string;
  isEdit:boolean = false;
  
  constructor(public appointmentsService:AppointmentsService,
    private router:Router,private authService:AuthService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.authService.user.subscribe(
      user=> {
        this.userId = user.uid;
      }
    )
  }

  addAppointment(){
    this.appointmentsService.addAppointment_To_Firebase(this.userId,this.category,this.typeOfTreatment,this.date,this.time,this.city)
    this.router.navigate(['/future']);
    console.log("addAppointment")
  }
  

}
