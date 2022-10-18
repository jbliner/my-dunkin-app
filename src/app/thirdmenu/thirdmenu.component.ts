import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { ThirdMenuInfo } from './thirdmenu.model';

@Injectable()

@Component({
  selector: 'app-thirdmenu',
  templateUrl: './thirdmenu.component.html',
  styleUrls: ['./thirdmenu.component.css']
})
export class ThirdmenuComponent implements OnInit {
  menuInfo: ThirdMenuInfo | undefined;

  constructor(private http: HttpClient) { 
    
  }

  getMenuInfo(){
    return this.http.get<ThirdMenuInfo>('https://dunkin-app-98d50-default-rtdb.firebaseio.com/my-info.json');
  }
  showMenuInfo(){
    this.getMenuInfo().subscribe((data: ThirdMenuInfo) => {
      console.log(data);
      this.menuInfo = data;
    })
  }
  ngOnInit(): void {
    this.getMenuInfo();
    this.showMenuInfo();
  }

}
