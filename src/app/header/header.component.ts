import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  title="Angular 2 Test"
  subtitle="記載著<strong> Will</strong> 在網路世界的學習心得與技術分享"
  constructor() { }

  ngOnInit() {
  }

 changeTitle(){
   this.title="Angular 2 Change Title"
 }
 
}
