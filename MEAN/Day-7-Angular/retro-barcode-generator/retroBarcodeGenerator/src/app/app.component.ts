import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'barcode';


  colorArr = this.randomColor();
  randomColor(){
    let arr = [];
    let rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
    for(let j = 0; j < 10; j++){
      let color = '#'
      for(let i = 0; i < 6; i++){
        color += rgb[Math.floor((Math.random()*16))];
      }
      arr.push(color);
    }
    return arr;
  };
}
