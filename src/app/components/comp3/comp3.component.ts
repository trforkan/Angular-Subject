import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/demo.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {

  userName: any

  constructor( private demoService: DemoService) {
    demoService.userName.subscribe(res => {
      this.userName = res;
    })
  }

  ngOnInit(): void {
  }

  triggerButton(event: any) {
    this.demoService.userName.next(event.value);
  }

}
