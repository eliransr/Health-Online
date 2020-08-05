import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:Observable<User | null>

  constructor(public afAuth:AngularFireAuth, private router:Router) { 
  
    this.user = this.afAuth.authState;
  }
  getUser(){
    return this.user
  }
  signUp(fullname:string,email:string,password:string){
    this.afAuth.createUserWithEmailAndPassword(email,password)
      .then(
        user => {
        console.log("sign up faild", user)
        this.router.navigate (['/login'])
      }).catch( (error)=> {
        let errorCode = error.code;
        let errorMessage = error.message;
        if(errorCode === 'auth/Worng-password'){
          alert('Wrong password');
        } else {
          alert(errorMessage)
        }
        console.log(error);
        });
  }

  Logout(){
    this.afAuth.signOut()
    .then(res => console.log('logout',res)
    )
    this.router.navigate(['/welcome'])
  }

  login(email:string, password:string){  
    console.log("user email:" ,email);
      this.afAuth.signInWithEmailAndPassword(email,password)
      .then( () => {
        console.log('login ok')
        this.router.navigate (['/appointments'])
      }).catch( (error)=> {
        let errorCode = error.code;
        let errorMessage = error.message;
        if(errorCode === 'auth/Worng-password'){
          alert('Wrong password');
        } else {
          alert(errorMessage)
        }
        console.log(error);
        });
      
  }

  resetPassword(email: string) {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
      .then(() => console.log("email sent"))
      .catch((error) => console.log(error))
  }
   
}

