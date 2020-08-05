import { MedicinesRaw } from './../interfaces/medicines-raw';
import { Blogmedicines } from './../interfaces/blogmedicines';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map,catchError} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  
  private APImedicatios = "https://smart-api.info/api/metadata/235e75417247f07e5fed6acf3f345bb7";
  private KEY = "235e75417247f07e5fed6acf3f345bb7";
  private IMP = "&units=metric";

  constructor(private http:HttpClient,private db:AngularFirestore,public router:Router) { }

  MedicatiosCollection:AngularFirestoreCollection;
  UserCollection:AngularFirestoreCollection = this.db.collection('Users');
  
  // getMedicatios():Observable<Blogmedicines[]>{
  //  return this.http.get<Blogmedicines[]>(`${this.APImedicatios}`);
  // }

  getMedicatios():Observable<any[]>{
    return this.db.collection('medications').valueChanges();
   }

  getMedicatios_From_Firebase(userId:string): Observable<any[]> {
    this.MedicatiosCollection = this.db.collection(`Users/${userId}/medicatios`);
    console.log('medicatios collection created');
    return this.MedicatiosCollection.snapshotChanges().pipe(
      map(collection => collection.map(document => {
        const data = document.payload.doc.data();
        data.id = document.payload.doc.id;
        console.log(data);
        return data;
      }))
    );    
    } 
    
    addMedicatios_To_Firebase(userId:string,name:string, description:string,price:number){
       const medicatios = {name:name, description:description,price:price};
       this.UserCollection.doc(userId).collection('medicatios').add(medicatios);
       alert('The medicatin Add to cart');
      }

      deleteMedicatiosFromCollection(userID, key_id)
    {
      this.db.doc(`Users/${userID}/medicatios/${key_id}`).delete();
      
    }

    private handleError(res: HttpErrorResponse) {
      console.error("in the service" + res.error);
      return throwError(res.error || 'Server error');
    }

     searchData():Observable<Blogmedicines>{
       return this.http.get<MedicinesRaw>(`${this.APImedicatios}&APPID=${this.KEY}${this.IMP}`)
       .pipe(
         map(data => this.transformData(data)),
         catchError(this.handleError)
       )
    
     }

     private transformData(data:MedicinesRaw):Blogmedicines{
       return {
        Name:data.example[0].Name,
        id:data.example[0].pert_id,
       }
    
     }
    
}
