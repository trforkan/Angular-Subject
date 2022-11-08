import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  titleVisible = new Subject<boolean>();

  userName = new Subject<any>();

  constructor() { }

  display(){
    console.log(this.titleVisible);
    console.log(this.userName);
  }
}
