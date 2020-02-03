import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngregisterComponent } from './angregister/angregister.component';
import { AngloginComponent } from './anglogin/anglogin.component';
import { ReactRegisterComponent } from './react-register/react-register.component';
import { ReactLoginComponent } from './react-login/react-login.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";  
import { ReactiveFormsModule } from "@angular/forms";
import { FormbuilderComponent } from './formbuilder/formbuilder.component';

@NgModule({
  declarations: [
    AppComponent,
    AngregisterComponent,
    AngloginComponent,
    ReactRegisterComponent,
    ReactLoginComponent,
    HeaderComponent,
    PagenotfoundComponent,
    HomeComponent,
    FormbuilderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
