import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  username:string;
  tableau : any[];
   logintab:any[];
   image: string;

  constructor(private router: Router) { 
//add them then when you serve your page delete them
  // localStorage.setItem('user-connect',"false")
    //localStorage.setItem('user.list',"")
        //
    //  localStorage.setItem('userlist',JSON.stringify([]))
    localStorage.setItem('list.article',JSON.stringify([]))
   // localStorage.setItem('cennected',JSON.stringify([]))
   localStorage.setItem('list.commantaire',JSON.stringify([]))
}

ngOnInit() {
console.log(localStorage.getItem('user-connect'))

 this.loginForm = new FormGroup({
   email:new FormControl ('', [Validators.required]),
   password:new FormControl ('', [Validators.required])
 });
this.tableau=JSON.parse(localStorage.getItem('user.list'));
}


 onSubmit() {
this.tableau.forEach(element => {
if((this.loginForm.value.email === element.email )&&(this.loginForm.value.password === element.Password)){
 localStorage.setItem('user-connect','true');
 
this.router.navigateByUrl('/allarticle');  
 //refrech the page
location.reload();
 //localStorage.setItem('user-connect',JSON.stringify(element));

this.username=element.firstname;
console.log(this.username)
}
})
const user=this.tableau.find(y=>y.email==this.loginForm.value.email && y.Password==this.loginForm.value.password)
localStorage.setItem('connected',JSON.stringify(user));

 }

}