import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  dkeyword='';
  keyword='';
    


  doSearch($event:KeyboardEvent){
    let input = $event.target as HTMLInputElement;
      if($event.keyCode==13)
      {
        this.keyword=input.value; 
      }
    }
    
      pkeyword='';
     doSearch2(pkeyword: string) {
     this.pkeyword = pkeyword;
  }
}
