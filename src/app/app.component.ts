import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';
//import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { DatePipe } from '@angular/common';
import { room } from './room';
import { getLocaleDateTimeFormat } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'smart_home';
  rooms ?:room[];
  list:any;
  date:any;

  constructor(private Data:DataServiceService){}
  ngOnInit(){
    this.date=Date.now();
    this.Data.getReadings().subscribe((val)=>{
      this.list=val;
      //console.log(val);
      this.rooms=this.list;

      console.log(this.rooms);
    });
  }
}
