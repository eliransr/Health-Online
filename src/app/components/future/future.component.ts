import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AppointmentsService } from './../../services/appointments.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreModule, AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { app } from 'firebase';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css']
})
export class FutureComponent implements OnInit {

  panelOpenState = false;
  appointment$:Observable<any[]>;
  id:string;
  userId:string;
  


  constructor(private appointmentsService:AppointmentsService,public authService:AuthService,private route:ActivatedRoute) { }

  ngOnInit() {
    console.log("NgOnInit started")  
    this.authService.user.subscribe(
      user=>{
        this.userId = user.uid;
        this.appointment$ = this.appointmentsService.getAppoinment_From_Firebase(this.userId);
      }
    )
    console.log(this.id);
  }

  deleteAppointment(id:string){
    this.appointmentsService.deleteAppointment(id, this.userId);
    console.log(id);

  }

}
