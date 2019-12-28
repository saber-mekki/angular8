

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';



@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.scss']
})
export class AddarticleComponent implements OnInit {
  public Editor = ClassicEditor;
  addArticleForm: FormGroup;
  tableau: any[];
  image: string;
  files: any;
  id:any;
  tableauuser:any;
  article: {
    titleArticle:string,
    content:string,
    image:string,
    category:string,
    
   }

  constructor() {/*localStorage.setItem('article',JSON.stringify([]));*/}
 
  ngOnInit() {
    this.tableau =[]
    this.tableauuser=JSON.parse(localStorage.getItem('connected'));
     
    this.tableau = JSON.parse(localStorage.getItem('list.article'));
    this.addArticleForm = new FormGroup({
      titleArticle: new FormControl('',[Validators.required]),
      content: new FormControl('',[Validators.required]),
      image: new FormControl('',[Validators.required]),
      category: new FormControl('',[Validators.required]),
      theme:new FormControl('',[Validators.required]),
      user:new FormControl(this.tableauuser.firstname)

    });
    console.log(this.addArticleForm);
  }
  addArticle(){
    this.tableau.push( this.addArticleForm.value);
    localStorage.setItem('list.article',JSON.stringify(this.tableau));
  }

  onFileChanges(event){
    const reader = new FileReader();
    reader.onloadend = (e) => {
      this.addArticleForm['controls'].image.setValue(reader.result);
    }
    reader.readAsDataURL(event.target.files[0]);
  }
}