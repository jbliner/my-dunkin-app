import { Component, Input, OnInit } from '@angular/core';
import { MenuItemModel } from './menu-item.model';
import { menu_item_list } from './product-list';

@Component({
  selector: 'app-menulayoutaddons',
  templateUrl: './menulayoutaddons.component.html',
  styleUrls: ['./menulayoutaddons.component.css']
})


export class MenulayoutaddonsComponent implements OnInit {
  @Input() menuIMG: string;
  @Input() itemDesc: string;
  

  constructor() {
    this.menuIMG = "";
    this.itemDesc = "missing title";

   }

  ngOnInit(): void {
  }

}