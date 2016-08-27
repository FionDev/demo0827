import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  title="Angular 2 Test"
  constructor() { }

  ngOnInit() {
  }

 changeTitle(){
   this.title="Angular 2 Change Title"
 }
 
}
