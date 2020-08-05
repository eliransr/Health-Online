import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  fullname: string;
  email: string;
  password: string;

  constructor(public authservice:AuthService, public router:Router) { }

  ngOnInit(): void {
  }

  signupBtn(){
    this.authservice.signUp(this.fullname,this.email, this.password);
  }


}
