import { Component, OnInit } from '@angular/core';
import { MenuItemModel } from './menulayoutaddons/menulayoutaddons/menu-item.model';

/* import { menu_item_list } from './menulayoutaddons/menulayoutaddons/product-list'; */

import { ProductService } from './menulayoutaddons/menulayoutaddons/product-service';

@Component({
  selector: 'app-menulayout',
  templateUrl: './menulayout.component.html',
  styleUrls: ['./menulayout.component.css']
})

export class MenulayoutComponent{
  items: MenuItemModel[] = [];
  
  constructor(private productService: ProductService){

    /* for(var x of menu_item_list){
      console.log(x)
      this.items.push(x)
    } */

  }

  ngOnInit(): void{
    this.productService.getProducts().subscribe((data: MenuItemModel[]) => {
      for(var x of data){
        console.log(x)
        this.items.push(x)
      }
  
    })
  }
  
}