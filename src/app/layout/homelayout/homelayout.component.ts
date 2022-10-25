import { Component} from '@angular/core';

/*import { mock_product_list } from 'src/app/cardslabexample/mock-product-list';*/

import { ProductItemModel } from 'src/app/cardslabexample/product-item.model';
import { ProductService } from 'src/app/cardslabexample/products.service';

@Component({
  selector: 'app-homelayout',
  templateUrl: './homelayout.component.html',
  styleUrls: ['./homelayout.component.css']
})

// ADDED FROM LAB EXAMPLE

export class HomelayoutComponent{
products: ProductItemModel[] = [];

constructor(private productService: ProductService){
}

  /* for(var x of mock_product_list){
    console.log(x)
    this.products.push(x) 
  } */


ngOnInit(): void{
  this.productService.getProducts().subscribe((data: ProductItemModel[]) => {
    for(var x of data){
      console.log(x)
      this.products.push(x)
    }

  })
}
}
