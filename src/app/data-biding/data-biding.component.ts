import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {
imgURL ="https://uploads.metropoles.com/wp-content/uploads/2019/12/23145319/yoda-600x400.jpg";
isDisabled=true;  
texto="Bem vinda";
constructor() {
setTimeout(() => {
  this.isDisabled=false;
}, 12000);

 }

  ngOnInit(): void {
  }
  getImageURL(){
   return this.imgURL;
  }

}
