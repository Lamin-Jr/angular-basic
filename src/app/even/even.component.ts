import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'even-number',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  constructor() { }

  @Input() eveNumberShow: number;

  ngOnInit(): void {
  }

}
