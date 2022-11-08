import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, from, fromEvent, interval, map, take, takeUntil, toArray } from 'rxjs';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('myInput') myInput: ElementRef | undefined;

  userName: any = 'Forkan';

  customDataArray: any;

  requestedData?: string;

  constructor(private demoService: DemoService) { }

  ngAfterViewInit(){
    const searchText = fromEvent<any>(this.myInput?.nativeElement, 'keyup');
    searchText.pipe(
      map(data => data.target.value),
      debounceTime(2000),
      distinctUntilChanged()
    ).subscribe(res => {
      console.log(res);
      this.requestedData = res;
    })
  }

  ngOnInit(): void {

    
    
    this.demoService.userName.subscribe(res => {
      this.userName=res
    })

    this.demoService.userName.next(this.userName);

    this.basicFunction();

    const customData = from([
      { Name: 'Forkan' , Mobile: '01521329891'},
      { Name: 'Dhiman' , Mobile: '01521329892'},
      { Name: 'Prianka' , Mobile: '01521329893'},
      { Name: 'Sujon' , Mobile: '01521329894'},
      { Name: 'Dipo' , Mobile: '01521329895'}
    ]);

    customData.pipe(
      filter(response => response.Name.length >= 6),
      map(response => response.Name),
      toArray()
    ).subscribe(res => {
      this.customDataArray = res; 
    });

    console.log(this.customDataArray)

  }

  basicFunction() {

    let condition = fromEvent(document, 'click')

    const streamData = interval(500);
    streamData.pipe(
      take(5),
      // takeUntil(condition),
      map( response => 'id = '+ response)
    ).subscribe( response => {
      console.log(response);
    })
  }

  changeSubjectValue() {
    this.demoService.titleVisible.next(true);
  }

}
