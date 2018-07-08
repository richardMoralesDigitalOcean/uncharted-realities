import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-news-and-events',
  templateUrl: './news-and-events.component.html',
  styleUrls: ['./news-and-events.component.scss']
})
export class NewsAndEventsComponent implements OnInit {
  view: string;
  prevView: string; // used when closing a document to get previous view
  scrollState: number; // used in order to make sure previous scroll state is preserved after closing a document
  prevScrollState: number;
  constructor() {
    this.view = 'news';
  }
  ngOnInit() {
    const scrollContainer = $('.scroll-container');
    console.log('Scroll Container', scrollContainer);
    scrollContainer[0].addEventListener('scroll', () => {
      this.scrollState = $('.scroll-container').scrollTop();
      console.log('Scroll State', this.scrollState);
    }, true);
  }
  toggleView(type): void {
    switch (type) {
      case 'readMore':
        this.prevScrollState = this.scrollState;
        break;
      default:
        this.prevView = type;
        break;
    }
    this.view = type;
  }
  closeDocument(): void {
    this.view = this.prevView;
    const scrollContainer = $('.scroll-container');
    scrollContainer[0].scrollTop = this.prevScrollState;
    console.log('Scroll Container', scrollContainer);
    console.log('Scroll State', this.prevScrollState);
    console.log('Scroll Top', scrollContainer[0].scrollTop);
  }
}
