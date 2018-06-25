import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  menuState = false;
  /*backgroundUrls: any = {
    home: 'assets/Images/backgrounds/abstract_polygonal/abstract_polygonal_black.PNG',
    worlds: 'assets/Images/backgrounds/abstract_polygonal/abstract_polygonal_dark_blue.PNG',
    about: 'assets/Images/backgrounds/abstract_polygonal/abstract_polygonal_sea_green.PNG',
    contact: 'assets/Images/backgrounds/abstract_polygonal/abstract_polygonal_yellow.PNG',
    vendors: 'assets/Images/backgrounds/abstract_polygonal/abstract_polygonal_magenta.PNG'
  };*/
  colorSchemes: any = {
    home: '#86c232',
    worlds: '#116466',
    vendors: '#cb2d6f',
    // about: '#00887a',
    about: 'white',
    contact: '#faed26'
  };
  constructor(private _route: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    $('.navContainer').hide();
  }
  navigation(event): void {
    const target = event.target;
    const pageId = target.attributes.id.nodeValue;
    const elements = $('.appContainer a.nav-link');
    for (const elem of elements) {
      const currId = $(elem).attr('id');
      console.log('Current Id: ' + currId);
      if (currId === pageId) {
        $(elem).addClass('active');
        $(elem).css('border-left', `2px solid ${this.colorSchemes[pageId]}`);
      } else {
        $(elem).removeClass('active');
        $(elem).css('border-left', `2px solid #6b6e70`);
      }
    }
  }
  toggleMenu(): void {
    // nav menu showing if menuState is true
    if (this.menuState) {
      $('.navContainer').hide();
    } else {
      $('.navContainer').show();
    }
    this.menuState = !this.menuState;
  }
}
