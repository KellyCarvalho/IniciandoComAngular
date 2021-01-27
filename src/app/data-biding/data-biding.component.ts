import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {
@Input() palavra: string;
@Input() color: string;
@Output() clickado = new EventEmitter();
imgURL ="https://uploads.metropoles.com/wp-content/uploads/2019/12/23145319/yoda-600x400.jpg";
isDisabled=true;  

texto="Bem vinda";
valor=0;
textoTempoReal ='';
valorContador=10;
valorChange = new EventEmitter();
constructor() {
setTimeout(() => {
  this.isDisabled=false;
}, 12000);

 }
 onClick($event){
  console.log("Caractere clicado: ", event);
 }

 OnkeyUp($event){
   this.textoTempoReal=$event.target.value;
   console.log('carateres digitados: ',$event);
 }

 OnClickEmmit($event){

this.clickado.emit($event);
console.log("emitindo informações para o componente Pai: ");

 }

 OnValorAtual(valorChange){
   this.valorContador=valorChange;
console.log('valor atual: ',valorChange)
}
  ngOnInit(): void {
  }
  getImageURL(){
   return this.imgURL;
  }

}
