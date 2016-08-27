import { Component } from '@angular/core';
import { HeroService } from './hero.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  
  title = 'app works!';

  doSearch(keyword: string) {
      this.datasvc.keyword = keyword;
    }

  
  
  constructor(private datasvc: HeroService) {
     
    }
  
}
