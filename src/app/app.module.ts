import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { HttpClientModule } from '@angular/common/http';
import { VisitesComponent } from './visites/visites.component';
import { DataService } from './services/app.service.data';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    NavbarComponent,
    MedecinsComponent,
    VisitesComponent
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
