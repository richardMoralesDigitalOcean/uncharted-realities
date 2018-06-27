import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form = 'visitor'; // visitor, or vendor
  constructor() {

  }
  toggleForm(formType): void {
    /*
      + Change view based on user clicking 'Visitor' or 'Vendor' button
    */
   this.form = formType;
  }
}
