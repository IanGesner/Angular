import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {

  // @Input('srvElement') 
  // element: {type: string, name: string, content: string};
  @Input() name;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnInit called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
  }

}
