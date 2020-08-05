import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { StoreService } from './../../services/store.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  data$:Observable<any[]>;
  userId:string;

  constructor(private storeService:StoreService, public auth:AuthService) { }

  ngOnInit() {
    this.auth.user.subscribe(
      user => {
        this.userId = user.uid;
        console.log(this.userId);
        this.data$ = this.storeService.getMedicatios_From_Firebase(this.userId);
    })

}

deleteDrug(key_id:string)
  {
  
    this.storeService.deleteMedicatiosFromCollection(this.userId,key_id);
    console.log(key_id)
  }
}
