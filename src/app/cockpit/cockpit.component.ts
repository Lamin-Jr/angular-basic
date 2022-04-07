import { HtmlAstPath } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormInterface } from '../form-model.interface';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });
  titlefm = '';
  descriptionfm = '';

  @Output() onAddServer = new EventEmitter<{
    title: string;
    description: string;
  }>();

  ngOnInit() {}
  InValidForm: string;

  @ViewChild("titleBind") titleElement: ElementRef;

  formOnClick() {

    console.log(this.titleElement)
    
      this.onAddServer.emit({
        title: this.titleElement.nativeElement.value,
        description: this.descriptionfm,
      });
      this.titlefm = "";
      this.descriptionfm ='';
    // }
  }

  constructor() {}
}
