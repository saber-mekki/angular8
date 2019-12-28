import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
 tableau:any[];
 id:any;
 user:any;
 tableauuser:any;
 sab:any;
 saber:any;
 firstname:any;
 tabcomm:any[];
  constructor(private route:ActivatedRoute) { 
  this.id =this.route.snapshot.paramMap.get('id');
  }
  ngOnInit() {
    this.tableauuser=JSON.parse(localStorage.getItem('connected'));
    this.tableau = JSON.parse(localStorage.getItem('list.article'));
    this.tabcomm = JSON.parse(localStorage.getItem('list.commantaire'))
    this.user=this.tableau[this.id]
  }
comm(){
  this.sab=this.saber
  this.firstname=this.tableauuser.firstname
 
}
}
