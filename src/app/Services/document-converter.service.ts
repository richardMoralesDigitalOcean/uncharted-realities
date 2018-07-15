import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders, HttpParams} from '@angular/common/http';
import * as $ from 'jquery';
declare var require: any;

// const fs = require('fs');
// const PDFParser = require('pdf2json');

@Injectable()
export class DocumentConverterService {
  private pdfParser;
  private response$;
  constructor(private http: HttpClient) {

  }
  async selectFromNewsDB(dateUBound: any) {
    const url = 'http://localhost/UnchartedRealities/api/actions/getNews.php';
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'});
    const data = `date=${dateUBound}`;
    const response: any = await this.http.post( url, data, {headers: headers})
    .toPromise()
    .then(rsp => {
      return rsp;
    });
     return response;
  }
  async getNumRowsNewsDB() {
    const url = 'http://localhost/UnchartedRealities/api/actions/getNumRowsNews.php';
    const response: any = await this.http.get( url ).toPromise();
    return response;
  }
  async selectFromEventsDB(dateUBound: any) {
    const url = 'http://localhost/UnchartedRealities/api/actions/getEvents.php';
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'});
    const data = `date=${dateUBound}`;
    const response: any = await this.http.post( url, data, {headers: headers})
    .toPromise()
    .then(rsp => {
      return rsp;
    });
     return response;
  }
  async getNumRowsEventsDB() {
    const url = 'http://localhost/UnchartedRealities/api/actions/getNumRowsEvents.php';
    const response: any = await this.http.get( url ).toPromise();
    return response;
  }
}
