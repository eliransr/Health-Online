import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MatCardModule} from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { FutureComponent } from './components/future/future.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DiagnosisComponent } from './components/diagnosis/diagnosis.component';
import { ResultsComponent } from './components/results/results.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule, AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {MatSelectModule} from '@angular/material/select';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { StorePageComponent } from './components/store-page/store-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { EditformComponent } from './components/editform/editform.component';
import { CommonModule } from '@angular/common';
import { PaymentpageComponent } from './components/paymentpage/paymentpage.component';
import { FileuploadComponent } from './components/fileupload/fileupload.component';  

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'future', component: FutureComponent },
  { path: 'diagnosis', component: DiagnosisComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'store-page', component: StorePageComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'editform/:id', component: EditformComponent },
  { path: 'paymentpage/:name/:price', component: PaymentpageComponent },
  { path: 'recognitiondoctor', component: FileuploadComponent },
  { path: 'resultrekognition', component: FileuploadComponent },


  { path: "",
    redirectTo: '/appointments',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavComponent,
    AppointmentsComponent,
    FutureComponent,
    DiagnosisComponent,
    ResultsComponent,
    SignupComponent,
    LoginComponent,
    StorePageComponent,
    CartPageComponent,
    EditformComponent,
    PaymentpageComponent,
    FileuploadComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,'HealthProject'),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),

    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    HttpClientModule,
    AngularFireModule,
    AngularFirestoreModule,
    MatSelectModule,
    AngularFireAuthModule,
    CommonModule
  ],
  
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
