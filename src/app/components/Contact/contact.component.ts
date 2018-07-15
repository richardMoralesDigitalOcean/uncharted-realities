import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  form = 'visitor'; // visitor, or vendor
  visitorForm: FormGroup;
  vendorForm: FormGroup;
  contactForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createVisitorForm();
    this.createVendorForm();
    this.createContactForm();
  }
  toggleForm(formType): void {
    /*
      + Change view based on user clicking 'Visitor' or 'Vendor' button
    */
   this.form = formType;
  }
  createVisitorForm(): void {
    this.visitorForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      email: ['', Validators.required ],
      phone: ['', Validators.required ],
      message: ''
    });
  }
  createVendorForm(): void {
    this.vendorForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      email: ['', Validators.required ],
      phone: ['', Validators.required ],
      companyName: ['', Validators.required ],
      companyAddress: ['', Validators.required ],
      productType: ['', Validators.required ],
      subject: ['', Validators.required ],
      message: ['', Validators.required ]
    });
  }
  createContactForm(): void {
    this.contactForm = this.fb.group({
      address: ['933 SW 3rd Ave, Portland, OR', Validators.required ],
      phone: ['(844)633-0075', Validators.required ],
      email: ['​info@unchartedrealities.com', Validators.required ],
    });
  }
  sendEmail(): void {
    const type = this.form;
    let contactObj: any = null;
    let body = '';
    switch (type) {
      case 'vendor':
        contactObj = this.vendorForm.value;
        body = `From: ${contactObj.firstName + ' ' + contactObj.lastName} \n
                Email: ${contactObj.email} \n
                Phone: ${contactObj.phone} \n
                Message: ${contactObj.message} \n
                Company: ${contactObj.companyName} \n
                Company Address: ${contactObj.companyAddress} \n
                Product Type: ${contactObj.productType} \n
                Subject: ${contactObj.subject} \n
                Message: ${contactObj.message}`;
        break;
      case 'visitor':
        contactObj = this.visitorForm.value;
        body = `From: ${contactObj.firstName + ' ' + contactObj.lastName} \n
                Email: ${contactObj.email} \n
                Phone: ${contactObj.phone} \n
                Message: ${contactObj.message}`;
        break;
      default:
        break;
    }
    console.log('Contact Obj', contactObj);
    console.log(body);
    window.open(`mailto:​info@unchartedrealities.com?subject=subject&body=${body}`);
  }
}
