import { Component, OnInit, ViewChild } from '@angular/core';
import {Document, documentsDummy} from '../../DummyData/news&Events';
import {DocumentConverterService} from '../../Services/document-converter.service';

import * as $ from 'jquery';
@Component({
  selector: 'app-news-and-events',
  templateUrl: './news-and-events.component.html',
  styleUrls: ['./news-and-events.component.scss']
})
export class NewsAndEventsComponent implements OnInit {
  @ViewChild('scrollContainer') scrollContainer;
  view: string;
  prevView: string; // used when closing a document to get previous view
  prevCardId: string; // used when returning user to previous view to scroll to last viewed card
  prevScrollPosition: number;
  documents: Document[];
  activeDocument: Document;
  documentPageIndex: number;
  pdf: any;
  constructor(private documentConverter: DocumentConverterService) {
    this.view = 'news';
    this.documentPageIndex = 0;
    this.filterDocuments(this.view);
    this.getDocuments();
    this.pdf = '';
  }
  ngOnInit() {
    this.trackScroll();
  }
  trackScroll(): void {
    const scrollContainer = document.getElementsByClassName('scroll-container')[0];
    scrollContainer.addEventListener('scroll', () => {
      const scrollTop = scrollContainer.scrollTop;
        if (this.view !== 'readMore') {
          this.prevScrollPosition = scrollTop;
        }
    }, true);
  }
  getDocumentsFromArray() {

  }
  getDocuments(): void {
    // const testEventUrl = 'assets/Documents/Events/testEvent.pdf';
   // const pdf = this.documentConverter.convertPDF(testEventUrl);
    // this.pdf = pdf;
  }
  filterDocuments(type): void {
    /*
      + Filters documents based on the type of view currently chosen
      + For 'news' view, will get documents with type = 'news'
      + For 'events' view, will get documents with type = 'event'
    */
   console.log('Filtering Documents: ' + type);
    this.documents = documentsDummy.filter((document) => {
      return document.type === type;
    });
    /*
    this.documents.map(document()=>{
      const documentBody = document.body;
      const bodyPreview = documentBody.
    });*/
    console.log('Documents', this.documents);
  }
  toggleView(type, ...args): void {
    /*
      + Allows users to switch between 'news' and 'events' views
      + 'news' view will show news documents
      + 'events' view will show events documents
      + prevView refers to only an 'event' or 'news' page and is thus only set on those types
        It iwas used when closing 'readMore' document
    */
   switch (type) {
     case 'news':
     case 'events':
      this.prevView = type;
      this.filterDocuments(type);
      break;
    default:
      const elemId: string = args[0];
      const document: Document = args[1];
      this.prevCardId = elemId;
      this.activeDocument = document;
      console.log('Elem Id', elemId);
      break;
   }
    this.view = type;
  }
  closeDocument(): void {
    /*
      + Sets view state back to the user's previous view state before clicking on a 'readMore' button
      + Requires timeout in order to allow the 'news' or 'events' view to populate DOM
      + Without timeout, scrollIntoView won't work and user's view will be reset to top of page!!!
    */
    this.view = this.prevView;
    const id = this.prevCardId;
    const scrollContainer = document.getElementsByClassName('scroll-container')[0];
    scrollContainer.scrollTop = this.prevScrollPosition;
    setTimeout(() => {
      console.log('Elem Id:' + this.prevCardId);
      const prevCard =  document.getElementById(this.prevCardId);

      console.log('Scroll Container', scrollContainer);
      // console.log('Prev Card', prevCard);
      // prevCard.scrollIntoView();
    }, 50);
  }
}
