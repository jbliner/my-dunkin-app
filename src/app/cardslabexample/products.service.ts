import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { ProductItemModel } from "./product-item.model"

@Injectable(
    {providedIn: 'root'}
)
export class ProductService{
    private BaseUrl: string = "https://dunkin-app-98d50-default-rtdb.firebaseio.com/my-info/"
    private endPoint: string = "Cardslabexample.json"

    constructor(private http: HttpClient){

    }

    getProducts(){
        return this.http.get<ProductItemModel []>(this.BaseUrl + this.endPoint);
    }

    getOneProduct(index: number){
        return this.http.get<ProductItemModel []>(this.BaseUrl + "products" + '/' + index + '.json');
    }

}