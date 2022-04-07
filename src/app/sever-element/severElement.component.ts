import { Component, Injectable, Input, OnInit, Output } from '@angular/core';

interface IServer {
  title: string;
  decription: string;
}

@Component({
  selector: 'sever-element',
  templateUrl: './severElement.component.html',
  styleUrls: ['./severElement.component.css']
})
export class SeverElementComponent {

// @Input() title: string;
// @Input() description: string = "";

 severElements: IServer;

@Input()
 elements: {title: string, description: string};



  constructor() { }


  // ngOnInit() {
  //   this.severElements.push({title: "Test Title", decription: "test Description"})
  // }

}
