import { Component, isDevMode, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/app.service.data';

@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.component.html',
  styleUrls: ['./medecins.component.scss']
})
export class MedecinsComponent implements OnInit {
  nomMedecin: any;
  lesMedecins: any;
  titre: string = 'Les medecins';
  estCacheMenu = false;
  medecin: any;
  afficherRapports: any;
  lesRapports: Array <any>=new Array();
  departement: any;

  
  date: any;
  motif: any;
  bilan: any;
  nomvisiteur: any;
  idMedecin: any;
  afficherListe: any;

  afficherMessage: any;
  lblMessage:any;
  adresse: any;
  spe: any;
  tel: any;
  id: any;
  afficherMedecin: any;
 
  
  

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {}

  charger(): void {
    this.dataService.chargerMedecins(this.nomMedecin).subscribe({
      next: (data) => {
        this.lesMedecins = data;
       
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  selectionner(med: any): void {
    this.medecin = med; 
    this.idMedecin = med.id;
    this.nomMedecin = med.nom + ' ' + med.prenom + '; dep : ' + med.departement;
    this.charger(); 
    
  }
  
  valider(): void {
    this.afficherMessage = true;
    this.dataService.majMedecin(this.medecin.id, this.medecin.adresse, this.medecin.tel, this.medecin.specialitecomplementaire)
      .subscribe({
        next: data => {
          this.lblMessage = "Enregistrement effectué";
        },
        error: error => {
          console.log("Erreur lors de la requête HTTP :", error);
          this.lblMessage = "Merci de réessayer plus tard";
        }
      });
  }

  majMedecin() : void{
    this.afficherRapports = false;
    this.afficherMedecin = true;
    this.afficherMessage = false;
  
  }
  
  

   derniersRapports(): void {
   this.dataService.chargerRapports(this.idMedecin).subscribe({
    next: (data) => {
      this.lesRapports = Array.of(data);
      this.afficherRapports=true;
    
    
    },
    error: (error) => {
      console.log(error);
    }
   })

  }
}
