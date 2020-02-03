import { AngregisterComponent } from './angregister/angregister.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactLoginComponent } from './react-login/react-login.component';
import { AngloginComponent } from './anglogin/anglogin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactRegisterComponent } from './react-register/react-register.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"angregister",component:AngregisterComponent},
  {path:"anglogin",component:AngloginComponent},
  {path:'formbuilder',component:FormbuilderComponent},
  {path:"react-register",component:ReactRegisterComponent},
  {path:"react-login",component:ReactLoginComponent},
  {path:"**",component:PagenotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
