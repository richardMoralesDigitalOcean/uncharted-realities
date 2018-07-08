import { Component, OnInit } from '@angular/core';
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
  colorSchemes: any = {
    home: '#86c232',
    worlds: '#116466',
    vendors: '#cb2d6f',
    newsAndEvents: 'white',
    // about: '#00887a',
    about: 'white',
    contact: '#faed26',
    shop: 'white'
  };
  constructor(private _route: ActivatedRoute, private router: Router, private location: Location) {
  }
  ngOnInit() {
    this.initSideNav(this.location);
  }
  // Set proper menu link to active upon reload
  initSideNav(location: Location): void {
    /*
      + Get corresponding sideNav element base on initial path
      + If location is empty, default to home
      + This will ensure the proper sideNav element is active and
        displays the left-border
    */
    let loc = this.location.path();
    if (loc === '') {
      loc = 'home';
    }
    const path = loc.substring(1);
    const elem = $(`#${path}`);
    /*
      + Set corresponding sideNav element to active
      + Set border color
    */
    elem.addClass('active');
    elem.css('border-left', `2px solid ${this.colorSchemes[path]}`);
    /*
      + SideNav State Check
      + First Check if 'menuState' exists in sessionStorage
        to prevent null errors for users navigating to site from another site
      + storedState will either be 'true' or 'false
      + storedState used to set menuState component variable as well as
        show or hide sideNav component
    */
    const storedState = sessionStorage.getItem('menuState');
    if (storedState) {
      switch (storedState) {
        case 'true':
          this.menuState = true;
          $('.navContainer').show();
          break;
        default:
          this.menuState = false;
          $('.navContainer').hide();
          break;
      }
    } else {
      sessionStorage.setItem('menuState', this.menuState.toString());
    }
  }
  navigation(event): void {
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
  toggleMenu(): void {
    /*
      + Check current state of menu, show or hide accordingly
      + Update state of sessionStorage('menuState')
      + true: sideNav is currently open
      + false: sideNav not currently open
    */
    if (this.menuState) {
      $('.navContainer').hide();
    } else {
      $('.navContainer').show();
    }
    this.menuState = !this.menuState;
    sessionStorage.setItem('menuState', this.menuState.toString());
  }
}
