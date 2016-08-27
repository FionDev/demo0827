import { Component } from '@angular/core';
import { HeroService } from './hero.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  
  title = 'app works!';

  dkeyword = '';
  keyword = '';



  doSearch($event: KeyboardEvent) {
    let input = $event.target as HTMLInputElement;
    if ($event.keyCode == 13) {
      this.keyword = input.value;
    }
  }

  pkeyword = '';
  doSearch2(pkeyword: string) {
    this.pkeyword = pkeyword;
  }
  
   deleteArticle(item) {
    let i = this.data.indexOf(item);
    this.data.splice(i, 1);
  }
  
  constructor(private datasvc: HeroService) {
      this.data = datasvc.data;
    }
  
  data:any[];

}
