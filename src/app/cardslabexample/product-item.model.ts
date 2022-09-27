export class ProductItemModel{

    img: string;
    cardTitle: string;
    desc: string;
    price: string;
    buttonIMG1: string;
    buttonIMG2: string;

    constructor(img: string, cardTitle: string, desc: string, price: string, buttonIMG1: string, buttonIMG2: string){
        this.img = img;
        this.cardTitle = cardTitle;
        this.desc = desc;
        this.price = price;
        this.buttonIMG1 = buttonIMG1;
        this.buttonIMG2 = buttonIMG2;
    }
  
}