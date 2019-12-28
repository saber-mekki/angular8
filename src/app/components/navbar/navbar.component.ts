import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isOpen: boolean=false;
  tableau:any[];
  isuser: boolean=true;
  username:string;
  d:any;
  date:any;
  constructor() {
   this.tableau=JSON.parse(localStorage.getItem('user.list'));
   //localStorage.setItem('user-connect',"false")
   }
   
  ngOnInit() {
    this.d=new Date();
this.date=this.d.toDateString();

  //change the nav bar 
  if((JSON.parse(localStorage.getItem('user-connect')))) {
    this.isuser=true;
    this.tableau.forEach(element => {
      this.username=element.firstname;
    })
  }
     else this.isuser=false
}
  toggleNavbar(){
    this.isOpen=!this.isOpen
  }
  
  logout(){
    localStorage.setItem('user-connect',"false")
    location.reload();
  }
  
    
     
  
  
}
