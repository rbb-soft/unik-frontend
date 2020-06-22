import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public appRoot: AppComponent) { }

  reziseImage(){

    let imgs:any=document.getElementsByTagName('img');
    for (let element  of imgs ) {
      
      if(element.width < element.height) {
       element.className = 'imgMaxHeight';
       console.log('cambiando...');
     }
    }
    
  }

  ngOnInit(): void {
    setTimeout(this.reziseImage,1500);

  }
  
  

}
