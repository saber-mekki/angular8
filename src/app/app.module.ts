import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { RegistreComponent } from './components/registre/registre.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddarticleComponent } from './components/addarticle/addarticle.component';
import { MyarticleComponent } from './components/myarticle/myarticle.component';
import { AllarticleComponent } from './components/allarticle/allarticle.component';
import { ProfilComponent } from './components/profil/profil.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { UpdateprofileComponent } from './components/updateprofile/updateprofile.component';
import { ArticleComponent } from './components/article/article.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistreComponent,
    ContactComponent,
    NavbarComponent,
    AddarticleComponent,
    MyarticleComponent,
    AllarticleComponent,
    ProfilComponent,
    UpdateprofileComponent,
    ArticleComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    AlifeFileToBase64Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
