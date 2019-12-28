import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.scss']
})
export class UpdateprofileComponent implements OnInit {
  profileForm :FormGroup;
  tableau : any[];
  id: any;
  constructor(private route:ActivatedRoute) { 


    this.id =this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit() {
    this.tableau=JSON.parse(localStorage.getItem('user.list'));
    this.profileForm = new FormGroup({
      firstname: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.email]),
      Password: new FormControl(null,[Validators.required]),
      age: new FormControl('',[Validators.required]),
      photo:new FormControl('',[Validators.required])

      
    });
  }
  addUser(){
     
      
      
    this.tableau[this.id]=this.profileForm.value;
   
    localStorage.setItem('user.list',JSON.stringify(this.tableau));
    
   }
}
