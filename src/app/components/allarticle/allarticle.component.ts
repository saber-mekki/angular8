import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allarticle',
  templateUrl: './allarticle.component.html',
  styleUrls: ['./allarticle.component.scss']
})
export class AllarticleComponent implements OnInit {
tableau:any[];
  constructor(private router: Router) { }

  ngOnInit() {
    this.tableau = JSON.parse(localStorage.getItem('list.article'));
    
  }
// see(i){
//   this.router.navigateByUrl('/article/i'); 
// }
}
