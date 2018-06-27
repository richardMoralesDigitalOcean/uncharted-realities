import { Component, OnInit } from '@angular/core';
import { worldsDummy } from './worldsDummyData';
import * as $ from 'jquery';

@Component({
  selector: 'app-worlds',
  templateUrl: './worlds.component.html',
  styleUrls: ['./worlds.component.css']
})
export class WorldsComponent {
  view = 'worlds';
  worlds: any[] = worldsDummy;
  pageIndex = 0;
  activeWorlds: any[] = [];
  activeWorld: any;
  constructor() {
    /*
      + Set activeWorlds to first 6 titles in worlds
      + Ensures that, initially, the view will show 6 titles
    */
    this.setActiveWorlds(0);
  }
  setActiveWorlds(pageIndex: number): void {
    /*
      + PageIndex used to get the startIndex
      + Since 'worlds' view shows up to 6 worlds at a time,
        pageIndex * 6 is used to determine starting index of data
        from the this.worlds array
      + Being that 6 is the max amount of worlds displayed, the loop
        run 6 times in order to populate activeWorlds with corresponding
        data from this.worlds array
    */
    this.activeWorlds = new Array();
    const startIndex = pageIndex * 6;
    let i = null;
    for (i = startIndex; i < startIndex + 6 && i < this.worlds.length; i++) {
      this.activeWorlds.push(this.worlds[i]);
    }
    /* Test */
    console.log(`Start Index: ${startIndex}`);
    console.log(`Active Worlds`, this.activeWorlds);
    console.log(`Stop Index: ${i}`);
    
  }
  showProfile(world): void {
    /*
      + Set activeWorld to selected game, profile component will source this data
      + Set view to 'profile' in order to show game's profile
    */
    this.activeWorld = world;
    this.view = 'profile';
  }
  showWorlds(): void {
    /*
      + Set view to 'worlds' in order to return to Worlds view
      + Reset activeWorld
    */
    this.activeWorld = null;
    this.view = 'worlds';
  }
  navigateWorlds(type): void {
    /*
      + Left: increment pageIndex by 1
      + Right: decrement pageIndex by 1
    */
    if (type === 'left') {
      this.pageIndex -= 1;
    }
    if (type === 'right') {
      this.pageIndex += 1;
    }
    this.setActiveWorlds(this.pageIndex);
  }
}
