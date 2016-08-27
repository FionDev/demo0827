import { HeroService } from './../hero.service';
import { Component, OnInit,OnChanges,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  item: any;
  
  @Input()
  keyword:string;
  
  //delete way2
  @Output() 
  delete=new EventEmitter<any>();
  
  //delete way1
   //deleteArticle(item) {
   //  this.delete.emit(item);
  // }
  
  constructor(private datasvc: HeroService) { }

  ngOnInit() {
  }

 
   
}
