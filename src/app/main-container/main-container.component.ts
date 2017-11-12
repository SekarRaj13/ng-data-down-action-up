import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainContainerComponent implements OnInit {
 names = ["sekar", "raj", "sekarraj"];
 name:string = "";
  constructor() { }

  ngOnInit() {
  }

  eventFromOuter(passed:string){
  this.name = passed;
  }

}
