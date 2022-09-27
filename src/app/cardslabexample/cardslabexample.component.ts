import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardslabexample',
  templateUrl: './cardslabexample.component.html',
  styleUrls: ['./cardslabexample.component.css']
})
export class CardslabexampleComponent implements OnInit {
  @Input() img: string;
  @Input() buttonIMG1: string;
  @Input() buttonIMG2: string;
  @Input() cardTitle: string;
  @Input() desc: string;
  @Input() price: string;
  

  constructor() {
    this.img = "";
    this.cardTitle = "missing title";
    this.desc = "missing description";
    this.price = "missing text";
    this.buttonIMG1 = "missing image";
    this.buttonIMG2 = "missing image";
   }

  ngOnInit(): void {
  }

}
