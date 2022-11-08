import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/demo.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  userName: any;

  constructor(private demoService: DemoService) {
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
