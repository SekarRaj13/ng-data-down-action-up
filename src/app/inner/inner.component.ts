import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InnerComponent implements OnInit {
	@Input() name:string 
	@Output() eventFromInner = new EventEmitter<string>()
  constructor() { }

  ngOnInit() {
  }

  sendToOuter(){
  		this.eventFromInner.emit(this.name);
  }

}
