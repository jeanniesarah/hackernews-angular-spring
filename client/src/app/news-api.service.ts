import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsApiService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://node-hnapi.herokuapp.com';
  }

  fetchStories(storyType: string, page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${storyType}?page=${page}`)
      .map(response => response);
  }

  fetchComments(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/item/${id}`)
      .map(response => response);
  }

  fetchUser(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${id}`)
      .map(response => response);
  }
}

