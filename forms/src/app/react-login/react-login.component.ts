import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-react-login',
  templateUrl: './react-login.component.html',
  styleUrls: ['./react-login.component.css']
})
export class ReactLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  lForm=new FormGroup({
    uname:new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required])
  })

  get uname() {
    return this.lForm.get("uname");
  }

  get password() {

    return this.lForm.get("password")
  }
}