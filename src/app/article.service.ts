import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  private articleUrl = 'http://localhost:3000/articles/search'

  getArticles(title){
    return this.http.get(`${this.articleUrl}/${title}`);
  }
}
