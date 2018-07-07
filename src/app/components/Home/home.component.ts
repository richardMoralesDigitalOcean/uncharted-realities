import { Component, OnInit } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
//   public carouselOne: NguCarousel;
  colorState = 0;
  colorThemes = ['', 'page-background-green-blue'];
  constructor() {  }
  ngOnInit() {
    /*this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 10000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    };*/
  }
  /*
  toggleColor(): void {
    const colorState = this.colorState;
    const currentColorTheme = this.colorThemes[colorState];
    let nextColorTheme =  null;
    // Reset colorState to zero if you're toggling from last color theme
    if (colorState === this.colorThemes.length - 1) {
      this.colorState = 0;

    } else {
      this.colorState += 1;
      nextColorTheme = this.colorThemes[ this.colorState ];
    }
    $('.page-background').removeClass(currentColorTheme);
    $('.page-background').removeClass(nextColorTheme);
  }*/
  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
 }
}
