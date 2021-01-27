import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
 @Input() valor=0;
  @Output() valorChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  decrementar(){
    if(this.valor==0||this.valor<0) {
alert('value can`t be negative');

this.valor>0? this.valor:this.valor=0;

    }else{
      this.valor-=1;
      this.valorChange.emit(this.valor);

    } 
  }

  incrementar(){
    this.valor+=1;
    this.valorChange.emit(this.valor);

  }

  OnValorAtual(){
    
    return this.valor;
    this.valorChange.emit(this.valor);

  }
}
