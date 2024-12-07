import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpclient: HttpClient) { }

  baseUrl = "http://localhost:3000";

  getMainBooks(): Observable<any> {
    return this.httpclient.get(`${this.baseUrl}/getMainBooks`);
  }

  getOtherBooks(parentId: any): Observable<any> {
    return this.httpclient.post(`${this.baseUrl}/getOtherBooks`,parentId);
  }

}
