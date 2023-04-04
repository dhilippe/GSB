import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  login: any;
  titre: string = "Connexion";
  mdp: any;
  lblMessage: string | undefined;
  estCache: boolean = true;
  change: boolean = false;

  
  constructor(private router: Router){}

    ngOnInit(): void {
    }
    valider(): void {
      if (this.login == "toto" && this.mdp == "titi") {
        this.lblMessage = "Mot de passe correct",
          this.estCache = false;
          console.log("ok");
          this.router.navigate(['accueil']);
      }
      else {
        console.log("erreur");
        this.lblMessage = "Mot de passe incorrect";
  
        this.estCache = false;
      }
    }
  }


