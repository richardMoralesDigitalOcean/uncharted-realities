import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  menuState = false;
  route: string;
  href = '';
  unusedColors: any = {
    home: '#86c232',
    worlds: '#116466',
    vendors: '#cb2d6f',
    contact: '#faed26',
    about: '#00887a'
  };
  colorSchemes: any = {
    home: 'white',
    worlds: 'white',
    vendors: 'white',
    newsAndEvents: 'white',
    about: 'white',
    contact: 'white',
    shop: 'white'
  };
  constructor(private _route: ActivatedRoute, private router: Router, private location: Location) {
  }
  ngOnInit() {
      /*
      + Get corresponding sideNav element base on initial path
      + Set active nav button item left border style based on path
    */
    // path example: /home
    const path = this.getPath(this.location);
    this.setNavBtnStyle(path.substring(1));
  }
  // getPath:: null -> string
  getPath(location: Location): string {
   return this.location.path();
  }
  // setNavBtnStyle :: string -> null
  setNavBtnStyle(path): void {
    /*
      + Take sideNav element base on initial path as argument
      + Set proper sideNav element to active and display white left-border
    */
    const elem = $(`#${path}`);
     elem.addClass('active');
     elem.css('border-left', `2px solid white`);
  }
  // handleNavBtnClick:: Event -> void
  handleNavBtnClick(event): void {
    /*
      + Get the clicked sideNav element and extract id attribute to get new path
      + Loop through all sideNav elements
      + For all sideNav elements whose id != path, remove 'active' class and set to default style
      + For sideNav element whose id === path, add 'active' class and set 'active' style
    */
    const target = event.target;
    const path = target.attributes.id.nodeValue;
    const elements = $('.appContainer a.nav-link');
    for (const elem of elements) {
      const currId = $(elem).attr('id');
      if (currId === path) {
        $(elem).addClass('active');
        $(elem).css('border-left', `2px solid ${this.colorSchemes[path]}`);
      } else {
        $(elem).removeClass('active');
        $(elem).css('border-left', `2px solid #6b6e70`);
      }
    }
  }
  // handleSocialMediaBtnClick:: Event -> void
  handleSocialMediaBtnClick(btn: string): void {
    // btn values: instagram, googlePlus, facebook, twitter, phone
    // no Google Plus account set yet, so alert user and do nothing
    if (btn === 'googlePlus') {
      alert('Google Plus Account Coming Soon!');
      return;
    }
    // use btn string to source action url
    const action = {
      phone: 'tel:8446330075',
      facebook: 'https://www.facebook.com/UnchartedRealities',
      twitter: 'https://twitter.com/UnchartedReal',
      instagram: 'https://www.instagram.com/UnchartedRealities/'
    }[btn];
    // open action url in new tab
    window.open(action, '_blank');
  }
}
