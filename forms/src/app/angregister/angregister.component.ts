import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angregister',
  templateUrl: './angregister.component.html',
  styleUrls: ['./angregister.component.css']
})
export class AngregisterComponent implements OnInit {

  constructor() { }

  checkngmodeldetail(x){
    console.log(x);
    
  }

  onSubmit(x){
    console.log(x);
    
  }
  ngOnInit() {
  }

}
