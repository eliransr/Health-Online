import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisserviceService {

  private url = "https://dl2qgy18x8.execute-api.us-east-1.amazonaws.com/beta";

  public categories:object = {0: 'Stoke - Your medicine: Anticoagulant', 1: 'Flu - Your medicine: Dexamol cold sinus', 2: 'Ulcer - Your medicine: Omeprazole', 3: 'Coronavirus - You need to stay at home for 14 days', 4: 'Disc herniation - Your medicine: Arcoxia'};
  public doc:string;

  constructor(private http:HttpClient) { }
  
  diagnosis():Observable<any>{
    let json = {
      "articles": [
        {"text": this.doc}
      ]
    }
    let body = JSON.stringify(json);
    return this.http.post<any>(this.url,body).pipe(
      map(res => {
        let final = res.body.replace('[', '');
        final = final.replace(']', '');
        return final;
      })
    )
  }
}
