import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { MenuItemModel } from "./menu-item.model"
import { AngularFireDatabase } from "@angular/fire/compat/database"

@Injectable(
    {providedIn: 'root'}
)
export class ProductService{
    private BaseUrl: string = "https://dunkin-app-98d50-default-rtdb.firebaseio.com/my-info/"
    private endPoint: string = "menulayoutaddons.json"

    constructor(private db: AngularFireDatabase){

    }

    getProducts(){
        return this.db.list<MenuItemModel>("my-info/menulayoutaddons").valueChanges();
    }

}