import { Component } from '@angular/core';
import { FormInterface } from './form-model.interface';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-angular';

  serverElements: FormInterface[] = []
  timerDisplay = 1;

  oddNumberDisplay: number;
  evenNumberDisplay: number;

  
  timerfn(numberData: number ){
    if(numberData % 2 == 0) {
      this.evenNumberDisplay = numberData
    }else{
      this.oddNumberDisplay = numberData
    }
  }

  addToServer(elements: {title: string, description: string}){
    this.serverElements.push({title: elements.title, description: elements.description})

  }

}
