import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  public images:string[] = [];
  public path:string = 'https://firebasestorage.googleapis.com/v0/b/health-project-66c4d.appspot.com/o/'

  constructor() { 
    this.images[0] = this.path +'Anticoagulant.jpg' + '?alt=media';
    this.images[1] = this.path +'Dexamol cold sinus.png' + '?alt=media';
    this.images[2] = this.path +'Omeprazole.jpg' + '?alt=media';
    this.images[3] = this.path +'' + '?alt=media';
    this.images[4] = this.path +'Arcoxia.jpg' + '?alt=media';
    this.images[5] = this.path +'jce.jpg' + '?alt=media';

  }
 
}
