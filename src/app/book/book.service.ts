import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  deleteBook(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/deleteBook`,data);
  }


}
