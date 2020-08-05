import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AppointmentsService } from './../../services/appointments.service';
import { TooltipPosition } from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {

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
      user => {
        this.userId = user.uid;
      }
    )
    console.log(this.id);
    this.appointmentsService.getAppoinment_for_update(this.userId).subscribe(
      appointment => {
        this.category = appointment.data().category;
        this.typeOfTreatment = appointment.data().typeOfTreatment;
        this.city = appointment.data().city;
        this.date = appointment.data().date;
        this.time = appointment.data().time;
      }
    )
  }

  onsubmit(){
    this.appointmentsService.updateAppointment(this.userId,this.id,this.category,this.city,this.typeOfTreatment,this.date,this.time)
    this.router.navigate(['/future']);
  }

}
