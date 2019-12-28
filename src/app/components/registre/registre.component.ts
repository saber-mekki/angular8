import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";
@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.scss']
})
export class RegistreComponent implements OnInit {
  profileForm :FormGroup;
  tableau : any[];
   taskArray: any[]=[];
   index: number;
   image:string;
   files: any;
   
    constructor(private router: Router) {
  
  this.tableau=[];
      
      this.profileForm = new FormGroup({
        firstname: new FormControl('',[Validators.required]),
        lastname: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.email]),
        Password: new FormControl(null,[Validators.required]),
        age: new FormControl('',[Validators.required]),
        photo:new FormControl('')

        
      });
      console.log(this.profileForm)
     
    //localStorage.setItem('user.list',JSON.stringify([]))
    // localStorage.setItem('list.article',JSON.stringify([]))
    
     }
  
    ngOnInit() {
      this.tableau=JSON.parse(localStorage.getItem('user.list'));
      
    
    }
   
    addUser(){
      
      //  this.tableau.forEach(element => {   
      //   if (this.profileForm.value.firstname == element.firstname ){
      
         this.tableau=JSON.parse(localStorage.getItem('user.list'));
       
        this.tableau.push(this.profileForm.value);
        console.log(this.profileForm.value)
        localStorage.setItem('user.list',JSON.stringify(this.tableau));
        this.router.navigateByUrl('/');  
        console.log("saber")
      } 
       
  //   }) 
  // }
   onFileChanges(event)
{
  const reader = new FileReader();
    reader.onloadend = (e) => {
      this.profileForm['controls'].photo.setValue(reader.result);
    }
    reader.readAsDataURL(event.target.files[0]);
  }
}

  
  
  
  
  