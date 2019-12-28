import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myarticle',
  templateUrl: './myarticle.component.html',
  styleUrls: ['./myarticle.component.scss']
})
export class MyarticleComponent implements OnInit {
tableau:any;
tabart:any[];
test :boolean =false;
  constructor() { }

  ngOnInit() {
    this.tableau=JSON.parse(localStorage.getItem('connected'));
    this.tabart=JSON.parse(localStorage.getItem('list.article'));


    this.tabart.forEach(element =>{ 
     if(this.tableau.firstname==element.user) this.test=true
    })
  }
  

 
}
