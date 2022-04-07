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
  
  timerfn(even: number ){

    this.timerDisplay = even
  }

  addToServer(elements: {title: string, description: string}){
    this.serverElements.push({title: elements.title, description: elements.description})

  }

}
