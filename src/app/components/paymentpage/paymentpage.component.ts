import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { StoreService } from './../../services/store.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent implements OnInit {

  data$:Observable<any[]>;
  userId:string;
  drugName:string;
  drugPrice:number;
  firstName:string;
  lastName:string;
  address:string;
  card:number;
  city:string;
  constructor(private storeService:StoreService, public auth:AuthService, private router: Router , private route: ActivatedRoute) { }

  submit(){
    if(this.firstName == null && this.lastName == null && this.card == null && this.city==null)
    {
      alert('Please full all fields')
    }
    else{
      alert('Thank you for purchasing, the product is already on your way')
      this.router.navigate(['/store-page']);
    }
    
  }

  ngOnInit() {
     this.auth.user.subscribe(
      user => {
        this.userId = user.uid;
        console.log(this.userId);
        this.data$ = this.storeService.getMedicatios_From_Firebase(this.userId);
    })

    this.drugName = this.route.snapshot.params.name;
    this.drugPrice = this.route.snapshot.params.price;
  }
}
