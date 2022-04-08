import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'odd-number',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  constructor() { }

  @Input() oddNumberShow: number= 1;


  ngOnInit(): void {
  }

}
