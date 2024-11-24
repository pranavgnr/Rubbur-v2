import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  baseUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  saveToBackend(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/save`,data);
  }

  updateToBackend(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/updateBook`,data);
  }
}
