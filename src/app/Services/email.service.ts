import { Injectable } from '@angular/core';
import * as $ from 'jquery';
@Injectable()
export class EmailService {
  apiKey: string;
  constructor() {
    this.apiKey = '_rByuoSNxDRpOLSaplgooA';
  }
  sendEmail(data) {
    console.log('Data', data);
    /*
    $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
          'key': this.apiKey,
          'message': {
            'from_email': data.email,
            'to': [
                {
                  'email': 'info@unchartedrealities.com',
                  'name': 'Uncharted Realities Admin',
                  'type': 'to'
                }
              ],
            'autotext': 'true',
            'subject': data.subject,
            'html': data.html
          }
        }
      }).done(function(response) {
        console.log('Mandril Response', response)
       alert(`Thank you for contacting our team at Uncharted Realities! \n
       Our team will review your email and get back to you as soon as possible.`);
      });
      */
  }
}
