import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistreComponent } from './components/registre/registre.component';
import { ContactComponent } from './components/contact/contact.component';
import { AllarticleComponent } from './components/allarticle/allarticle.component';
import { MyarticleComponent } from './components/myarticle/myarticle.component';
import { AddarticleComponent } from './components/addarticle/addarticle.component';
import { ProfilComponent } from './components/profil/profil.component';
import { AuthGuard } from './guards/auth.guard';
import { UpdateprofileComponent } from './components/updateprofile/updateprofile.component';
import { ArticleComponent } from './components/article/article.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'registre',component:RegistreComponent},
  {path:'contact',component:ContactComponent},
   {path:'allarticle',component:AllarticleComponent,canActivate:[AuthGuard]},
   {path:'myarticle',component:MyarticleComponent,canActivate:[AuthGuard]},
   {path:'addarticle',component:AddarticleComponent,canActivate:[AuthGuard]},
   {path:'profil',component:ProfilComponent,canActivate:[AuthGuard]},
   {path:'updateprofile/:id',component:UpdateprofileComponent,canActivate:[AuthGuard]},
   {path:'article/:id',component:ArticleComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
