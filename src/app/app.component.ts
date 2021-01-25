import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meuPrimeiroProjetoAngular';
  titulo ='meu primeiro projeto angular'

  constructor(){
    setTimeout(() => {
      this.titulo='mudança após 3 segundos'
    }, 3000);
  }

}
