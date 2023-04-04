import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  template: `<h1>Gestion des rapports de visite </h1>
              <app-connexion></app-connexion>`
})
export class AppComponent {
  title = 'GSB';
}
