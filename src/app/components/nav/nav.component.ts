import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Location } from "@angular/common";
import { Router,ActivatedRoute } from "@angular/router";
import { AuthService } from 'src/app/services/auth.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  title: string = 'Books';
  drawer;
  image:String;
  userId:string;
  useremail:string;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public authService:AuthService, 
    location: Location,router: Router,public imageService:ImageService) {
    router.events.subscribe(val => {

      if (location.path() == "/books" || location.path() == "/bookform") {
      this.title = 'Books';      
      } else if (location.path() == "/signup"){
      this.title = "Sign up form";
      } else if (location.path() == "/login"){
      this.title = "Login form";
      
      } else if (location.path() == "/classify"){
      this.title = "Classify Form";
      
      } else if (location.path() == "/classified"){
      this.title = "Classify Text";
      
      } else {
      this.title = "Temperatures";
      }
      });   
      }
      ngOnInit() {
        this.authService.user.subscribe(
          user => {
            this.userId = user.uid;
            this.useremail = user.email;
           }
        )
      }
    
    }
    
      

      
      
