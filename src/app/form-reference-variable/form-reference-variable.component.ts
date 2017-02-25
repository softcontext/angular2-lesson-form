import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'form-reference-variable',
  templateUrl: './form-reference-variable.component.html',
  styleUrls: ['./form-reference-variable.component.css']
})
export class FormReferenceVariableComponent implements OnInit {
  user = { id: '', name: '', password: '' }

  constructor() { }

  ngOnInit() {
  }

  submitForm(e) {
    console.log(e);
  }
}
