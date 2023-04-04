import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedecinsComponent } from './medecins/medecins.component';
import { VisitesComponent } from './visites/visites.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
{ path: '', component: ConnexionComponent},
{ path: 'medecins', component: MedecinsComponent},
{ path: 'visites', component: VisitesComponent},
{ path: 'accueil', component: NavbarComponent},
{ path: '**', redirectTo: '/connexion' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule,FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
