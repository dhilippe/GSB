import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
providedIn: 'root'
})

export class DataService {

private urlAPI = "http://localhost/restGSB"
    dataService: any;

constructor(private http: HttpClient) { }
public connexion (login: string, mdp: string) {
let url = this.urlAPI + "/connexion?login="+ login + "&mdp=" +mdp;
let req= this.http.get<string>(url);
return req;
    }


public chargerMedecins(nomMedecin: string){
    let url = this.urlAPI + "/medecins?nom=" + nomMedecin;
    let req = this.http.get<string>(url);
    return req;
    }

    public getIdMedecin(nom: string, prenom: string): Observable<number> {
        return this.dataService.chargerMedecins(nom).pipe(
          map((medecins: any[]) => {
            const medecin = medecins.find((med: any) => med.nom === nom && med.prenom === prenom);
            if (medecin) {
              return medecin.id;
            } else {
              throw new Error(`Médecin ${nom} ${prenom} introuvable`);
            }
          })
        );
      }

    
    public chargerRapports(idMedecin: number){
        let url = this.urlAPI + "/rapport/" + idMedecin;
        let req = this.http.get<Array <any>>(url);
        return req;
        }

          public majMedecin(id: string, adresse: string, tel: string, spe: string){
    let url = this.urlAPI + "/majMedecin" + id + adresse + tel + spe;
    let req = this.http.get<Array<any>>(url);
    return req;
  }

}
