import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  palavraPassada ="Qualquer Palavra";
  favoriteColor="red";
  titulo ='Socorro';

  constructor(){
    setTimeout(() => {
      this.titulo='socorro após 3 segundos'
    }, 3000);
  }

  eventoRecebido($event){
    console.log('App component: Event Emmiter', $event);
  }
  OnValorAtual(novoValor){
    console.log('OnValorAtual',novoValor);
  }

}
