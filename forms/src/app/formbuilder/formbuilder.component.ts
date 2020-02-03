import { UsernameValidator } from './../username.validator';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  // form=new FormGroup({
  //   name:new FormControl(""),
  //   password:new FormControl(""),
  //   email:new FormControl(""),
  //   address:new FormGroup({
  //     city:new FormControl(""),
  //     state:new FormControl(""),
  //     pincode:new FormControl("")
  //   })

  // });


  form=this.fb.group({
    name:["",[Validators.required,Validators.minLength(5),UsernameValidator.nospacebetweenusername,UsernameValidator.samename ]],
    password:["",Validators.pattern("^[A-Z]{1}[a-z]{n}$")],
    email:[""],
    address:this.fb.group({
      city:[''],
      state:[""],
      pincode:[""]
    }),
    aliases:this.fb.array([
      this.fb.control(' ')
    ])
  
  });


  onUpdate(){
    alert("danger");
    this.form.patchValue({
      name:"pavan",
      password:"123",
      address:{
        city:"anantapur"
      }
    })

  };

  addAlias(){
    alert("working ......!");
    this.aliases.push(this.fb.control(" "));
  }


  onSubmit(x){
    console.log(x.value);
    
  }
  ngOnInit() {
  }

  get name(){
    return this.form.get("name")
  }

  get password(){
    return this.form.get("password");
  }


  get aliases(){
    return this.form.get("aliases") as FormArray;
  }
}
