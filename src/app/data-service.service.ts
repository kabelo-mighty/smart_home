import { Injectable } from '@angular/core';
import {Firestore,collection,doc, updateDoc, collectionChanges, collectionData} from '@angular/fire/firestore';
import { room } from './room';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor( private store:Firestore){}

  collectionInst = collection(this.store,"rooms");

  Updateroom(room:any,val:any){
    const docInst= doc(this.store,"rooms",room);
    const data=val;
    updateDoc(docInst,data).then(()=>{
      console.log("success",data,room);
      
    }).catch((err)=>{
      console.log(err);
    });
  }
  getReadings(){
    return collectionData(this.collectionInst);
  }
}
