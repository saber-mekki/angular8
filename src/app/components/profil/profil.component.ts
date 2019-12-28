import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  tableau : any[];
  constructor() {
    
    
   }

  ngOnInit() {
    this.tableau=JSON.parse(localStorage.getItem('user.list'));
  }

}
