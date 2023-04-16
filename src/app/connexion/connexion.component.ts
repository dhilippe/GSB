import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from '../services/app.service.data';

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
  errorMessage: any;


  
  constructor(private router: Router, private dataService: DataService){}

    ngOnInit(): void {
    }
    valider(): void {
      console.log(this.login+this.mdp)
      this.dataService.connexion(this.login, this.mdp).subscribe({
        next: (data) => {
          this.router.navigate(['/accueil']);

        },
        error: (error) => {
        this.errorMessage = 'Une erreur s est produite lors de la connexion';
        }
      });
    }
  }

    // valider(): void {
    //   if (this.login == "toto" && this.mdp == "titi") {
    //     this.lblMessage = "Mot de passe correct",
    //       this.estCache = false;
    //       console.log("ok");
    //       this.router.navigate(['accueil']);
    //   }
    //   else {
    //     console.log("erreur");
    //     this.lblMessage = "Mot de passe incorrect";
  
    //     this.estCache = false;
    //   }
    // }


