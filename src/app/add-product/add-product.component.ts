import { Component, OnInit } from '@angular/core';
import { ProductItemModel } from '../cardslabexample/product-item.model';
import { ProductService } from '../cardslabexample/products.service';

@Component({
  selector: 'fm-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps: ProductService) { }

  ngOnInit(): void {
  }

  addProduct(product: ProductItemModel){ 
    console.log("You clicked add product");
    console.log(product);
    this.ps.addProduct(product);

  }
}
