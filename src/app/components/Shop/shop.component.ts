import { Component, OnInit } from '@angular/core';
import { shopDummy } from '../../DummyData/dummy-data-shop';
import {WorldsPipe} from '../../Pipes/worlds-pipe.pipe';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';

interface Theme {
  primary: string;
  secondary: string;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  filtersForm: FormGroup;
  view = 'landing';
  prevView = 'landing'; // used to capture last view state so that user can return to proper view after closing profile
  items: any[] = shopDummy;
  pageIndex = 0; // allows pagination of worlds data
  activeItems: any[] = [];
  activeItem: any;
  theme: Theme = {
    primary: '#1ca4a8',
    secondary: '#116466'
  };
  saleItems: any[] = [];
  newItems: any[] = [];
  title: string; // used to determine item type for 'all' view title
  breadcrumbs: string[]; // used to create page string showing navigation thread
  /***********For Pipe************/
  itemsBackup: any[] = shopDummy;
  constructor(private fb: FormBuilder) {
    /*
      + Set activeItems to first 6 titles in worlds
      + Ensures that, initially, the view will show 6 titles
    */
    this.createFiltersForm();
    this.hideProfile = this.hideProfile.bind(this);
    this.sortItemsByTags(this.items);
    // this.setactiveItems(0);
  }
  ngOnInit() {
  }
  createFiltersForm(): void {
    this.filtersForm = this.fb.group({
      filters: '',
    });
  }
  sortItemsByTags(items): void {
    for (const item of items) {
      const tags = item.tags;
      if ($.inArray('new', tags) !== -1) {
        this.newItems.push(item);
        continue;
      }
      if ($.inArray('sale', tags) !== -1) {
        this.saleItems.push(item);
        continue;
      }
    }

    console.log('New Items', this.newItems);
    console.log('Sliced New Items', this.newItems.slice(0, 4));
    console.log('Sale Items', this.saleItems);
    console.log('Sliced Sale Items', this.saleItems.slice(0, 4));
  }
  showProfile(item): void {
    /*
      + Set activeItem to selected items, profile component will source this data
      + Set view to 'profile' in order to show items's profile
    */
    this.activeItem = item;
    this.view = 'profile';
  }
  showWorlds(): void {
    /*
      + Set view to 'items' in order to return to items view
      + Reset activeItem
    */
    this.activeItem = null;
    this.view = 'items';
  }
  hideProfile(): void {
    /*
      + Constructor binds this function's context to WorldsComponent
        and thus can utilize this to change view and hide the ProfileComponent
    */
    this.view = this.prevView;
  }
  setactiveItems(): void {

  }
  filterItems(filterVal) {
    /*
      + Filter items by title, publisher, developer, genre
    */
    if (filterVal.trim().length === 0) {
      this.items = this.itemsBackup;
    } else {
      this.items = new WorldsPipe().transform(this.itemsBackup, filterVal);
    }
    this.pageIndex = 0;
    // this.setactiveItems(this.pageIndex);
  }
  viewAll(type): void {
    switch (type) {
      case 'sale':
        this.activeItems = this.saleItems;
        this.title = 'On Sale';
        this.breadcrumbs = ['shop', 'sale'];
        break;
      case 'new':
        this.activeItems = this.newItems;
        this.title = 'New Items';
        this.breadcrumbs = ['shop', 'new'];
        break;
      default:
        break;
    }
    this.view = 'all';
    this.prevView = 'all';
  }
}
