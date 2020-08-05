import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFirestoreModule, AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  appoinmentCollection:AngularFirestoreCollection;
  userCollection: AngularFirestoreCollection = this.db.collection('users');

  public categories:object = {0:'Dr.Amir Mesilati Specialization: Family Medicine', 1:'Dr.Eyle Keren Specialization: Heart diseases', 2:'Dr.Eliran Srur Specialization: Ophthalmologist', 3:'Dr.Shir Mansuri Specialization: Diabetes'};
  public doc:string;


  constructor(private db:AngularFirestore) { }

  getAppoinment_for_update(id:string):Observable<any>{
    return this.db.doc(`appointments/${id}`).get()
  }


     getAppoinment_From_Firebase(userId:string):Observable<any>{
      this.appoinmentCollection = this.db.collection(`users/${userId}/appointments`);
      return this.appoinmentCollection.snapshotChanges().pipe(
        map(
          collection => collection.map(
            document => {
              const data = document.payload.doc.data();
              data.id = document.payload.doc.id;
              return data;
            }
          )
        )
      )
  }
    deleteAppointment(id:string, userId:string){
      this.db.doc(`users/${userId}/appointments/${id}`).delete();
    }

    addAppointment_To_Firebase(userId:string,category:string,typeOfTreatment:string,date:string,time:string,city:string){
      const appointment = {field_treatment:category,treatment_requested:typeOfTreatment,time:time,date:date,city:city}
      //this.db.collection('appointments').add(appointment);
      this.userCollection.doc(userId).collection('appointments').add(appointment);
      console.log("appointment")
    }
    updateAppointment(userId:string,id:string,category:string,typeOfTreatment:string,date:string,time:string,city:string){
      this.db.doc(`users/${userId}/appointments/${id}`).update({field_treatment:category,treatment_requested:typeOfTreatment,time:time,date:date,city:city})
    }
  
}
 