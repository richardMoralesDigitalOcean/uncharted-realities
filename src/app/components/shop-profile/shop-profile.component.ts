import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface ShopItem {
  type: string;
  colors?: string[];
  sizes?: string[];
  name: string;
  quantity: number;
  src: string;
}

@Component({
  selector: 'app-shop-profile',
  templateUrl: './shop-profile.component.html',
  styleUrls: ['./shop-profile.component.css']
})
export class ShopProfileComponent implements OnInit {
  @Input() item: ShopItem;
  @Input() hideFunc: any; // function passed from parent which hides the ProfileComponent and returns to prev view
  optionsForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createOptionsForm();
  }

  ngOnInit() {
  }
  createOptionsForm(): void {
    this.optionsForm = this.fb.group({
      colors: ['', Validators.required],
      size: ['', Validators.required]
    });
  }
}
