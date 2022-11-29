import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { ProductItemModel } from "./product-item.model"
import {AngularFireDatabase} from "@angular/fire/compat/database"

@Injectable(
    {providedIn: 'root'}
)
export class ProductService{
    private BaseUrl: string = "https://dunkin-app-98d50-default-rtdb.firebaseio.com/my-info/"
    private endPoint: string = "Cardslabexample.json"

    constructor(private db: AngularFireDatabase){

    }

    getProducts(){
        return this.db.list<ProductItemModel>("my-info/Cardslabexample").valueChanges();
    }

    addProduct(product: ProductItemModel){
        this.db.list<ProductItemModel>("my-info/Cardslabexample").push(product);
    }

}