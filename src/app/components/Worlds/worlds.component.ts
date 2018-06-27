import { Component, OnInit } from '@angular/core';
import { worldsDummy } from './worldsDummyData';
import * as $ from 'jquery';

@Component({
  selector: 'app-worlds',
  templateUrl: './worlds.component.html',
  styleUrls: ['./worlds.component.css']
})
export class WorldsComponent {
  view = 'allWorlds';
  worlds: any[] = worldsDummy;
  activeWorlds: any[] = [];
  constructor() {
    /*
      + Set activeWorlds to first 6 titles in worlds
      + Ensures that, initially, the view will show 6 titles
    */
    for (let i = 0; i < 6; i++) {
      this.activeWorlds.push(this.worlds[i]);
    }
  }
}
