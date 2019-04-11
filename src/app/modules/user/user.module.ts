import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';
import { EmpleadoModule } from './empleado/empleado.module';



@NgModule({
  imports: [
    CommonModule,    
    BrowserModule,
    HttpClientModule,    
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgxPermissionsModule,
    AppRoutingModule,
    EmpleadoModule

  ],
  exports:[
     
  ],
  declarations: []
})
export class UserModule { }