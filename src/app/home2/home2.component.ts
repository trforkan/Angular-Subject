import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {

  titleVisible: boolean = false;

  constructor(private demoService: DemoService) { }

  ngOnInit(): void {
    this.demoService.titleVisible.subscribe(res => {
      this.titleVisible = res;
    });
    console.log("home2")
  }

}
