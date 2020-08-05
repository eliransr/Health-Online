import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authservice:AuthService,private router:Router,private route:ActivatedRoute) { }
  
  email:string;
  password:string;
  hide = true;
  public errorMessege;
  Emailmassage:string;
  passwordmassage:string; 

  ngOnInit() {
  }
  onSubmit(){
    if(this.email == null && this.password==null ){
      this.Emailmassage = "Email is required"
      this.passwordmassage = "Password is required"
    }
    else if (this.email == null) {
      this.Emailmassage = "Email is required"
    }
    else if (this.password == null){
      this.passwordmassage = "Password is required"
    }
    else{
      this.authservice.login(this.email,this.password);
    }
  }
}
