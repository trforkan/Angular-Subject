import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { map, fromEvent } from 'rxjs';
import { DemoService } from 'src/app/demo.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit , AfterViewInit {

  @ViewChild('inputData') inputData: ElementRef | undefined;

  userName?: string ;
  
  constructor(private demoService: DemoService) { 

    demoService.userName.subscribe(res => {
      this.userName = res;
    })
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  triggerButton(event: any) {
    this.demoService.userName.next(event.value);
  }

}

