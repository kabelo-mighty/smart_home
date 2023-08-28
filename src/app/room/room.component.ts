import { Component, Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {
    
  @Input() roomName!: string;
  @Input() temp!: string;
  @Input() Humidity!: string;
  @Input() Light!: boolean;
  @Input() Plug!: boolean;
  
  constructor(private Data:DataServiceService){}
     
   
  toogleLight(roomName:any){

   this.Data.Updateroom(roomName,{light:!this.Light});
    
  }
  tooglePlug(roomName:any){
    this.Data.Updateroom(roomName,{plug:!this.Plug});
  }
}
