import { Component, OnInit } from '@angular/core';
import { MenuItemModel } from './menulayoutaddons/menulayoutaddons/menu-item.model';
import { menu_item_list } from './menulayoutaddons/menulayoutaddons/product-list';

@Component({
  selector: 'app-menulayout',
  templateUrl: './menulayout.component.html',
  styleUrls: ['./menulayout.component.css']
})

export class MenulayoutComponent{
  items: MenuItemModel[] = [];
  
  constructor(){
    for(var x of menu_item_list){
      console.log(x)
      this.items.push(x)
    }
  }
  }