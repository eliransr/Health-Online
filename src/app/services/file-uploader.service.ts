import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploaderService {

  constructor(private http: HttpClient) { }
  // My Students: please replace the post url below 
  
  fileUpload(file: FormData):Observable<any> {
  return this.http.post('http://ec2-3-84-231-193.compute-1.amazonaws.com/upload-ng', file);
  }


  // fileUpload(file: FormData) {
  //   console.log("אלירן")
  //    console.log(this.http.get<any>('http://ec2-3-84-231-193.compute-1.amazonaws.com/useRekognition'));
  //    return this.http.get<any>('http://ec2-3-84-231-193.compute-1.amazonaws.com/useRekognition');
  // }

  // getComareasionn() {  
  //   return this.http.get<any>('http://xxx.xxx.4.xxx:9200/pcn/_search');  
  //   }  


}
  