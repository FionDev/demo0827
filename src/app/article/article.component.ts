import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  item: any;
  //delete way2
  @Output() 
  delete=new EventEmitter<any>();
  
  //delete way1
   //deleteArticle(item) {
   //  this.delete.emit(item);
  // }
  
  constructor() { }

  ngOnInit() {
  }

 
   
}
