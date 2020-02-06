import { Component } from '@angular/core';
import {ArticleService} from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchText : string;
  title = 'Search App';
  articles: any;

  constructor(private articleService: ArticleService){}

  onSubmit(){
    console.log(this.searchText);
    this.articleService.getArticles(this.searchText)
      .subscribe((articles)=>{
        console.log(articles);
        this.articles = articles;
      })
  }
}
