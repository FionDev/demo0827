import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './article/article.component';
import { PipeComponent } from './pipe/pipe.component';
import { HighlightPipe } from './highlight.pipe';

import { HeroService } from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, ArticleComponent, PipeComponent, HighlightPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [HeroService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
