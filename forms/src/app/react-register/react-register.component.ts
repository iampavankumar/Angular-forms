import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-register',
  templateUrl: './react-register.component.html',
  styleUrls: ['./react-register.component.css']
})
export class ReactRegisterComponent implements OnInit {

  constructor() { }

  rForm=new FormGroup({
    uname:new FormControl("",[Validators.required,Validators.maxLength(5)]),
    pass:new FormControl("",[Validators.required]),
    cpass:new FormControl(""),
    address:new FormGroup({
      city:new FormControl(""),
      state:new FormControl(""),
      pincode:new FormControl("")
    })
  })


  onLoadData(){
    alert("working.....!");
    this.rForm.patchValue({
      uname:"pavan",
      pass:"password",
      cpass:"password",
      address:{
        city:"ananthapur",
        state:"anantapur",
        // pincode:"651511"
      }
    })
  }

  get uname(){
    
    return this.rForm.get("uname");
  }
 get pass(){
   return this.rForm.get("pass");
 }
  submit(x){
    console.log(x.value);
  }
  ngOnInit() {
  }

}
