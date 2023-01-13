import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GrievanceFormComponent } from './components/grievance-form/grievance-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { GrievanceSubmitComponent } from './components/grievance-submit/grievance-submit.component';
import { MatSelectModule } from '@angular/material/select';
import { QueryResponseComponent } from './components/query-response/query-response.component';
import { HttpClientModule } from  '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { ViewGrievanceComponent } from './components/view-grievance/view-grievance.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GrievanceFormComponent,
    GrievanceSubmitComponent,
    QueryResponseComponent,
    LoginComponent,
    ViewGrievanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [ {
    provide: "BASE_API_URL", useValue: environment.apiUrl
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
