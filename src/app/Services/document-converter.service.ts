import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var require: any;
// const fs = require('fs');
// const PDFParser = require('pdf2json');

@Injectable()
export class DocumentConverterService {
  private pdfParser;
  constructor(private http: HttpClient) {
   // this.pdfParser = new PDFParser();
  }
  convertPDF(url) {
    this.http.get(url, {responseType: 'arraybuffer'})
      .toPromise()
      .then(data => {
          const file = new Blob([data], {type: 'application/pdf'});
           const fileURL = URL.createObjectURL(file);
           window.open(fileURL);
           console.log('File Url', fileURL);
           return fileURL;
           // window.open(fileURL);
      });
    /*
    console.log('Converting PDF');
    // let outputUrl = null;
    const pdfParser =  this.pdfParser;
    pdfParser.on('pdfParser_dataError', errData => console.error(errData.parserError) );
    pdfParser.on('pdfParser_dataReady', pdfData => {
        const output = JSON.stringify(pdfData);
        console.log('PDF To JSON', output);
        return output;
        // fs.writeFile('assets/Documents/Events/testEvent.json', JSON.stringify(pdfData));
        // this.http.get(this.configUrl);
    });
    pdfParser.loadPDF('assets/Documents/Events/testEvent.pdf');*/
  }
  getOutputUrl() {

  }
}
