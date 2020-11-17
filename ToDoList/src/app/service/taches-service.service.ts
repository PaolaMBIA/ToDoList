import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TachesServiceService {

  baseUri:string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  
  // task 
  createtask(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data);
  }

  // Get all tasks
  gettasks() {
    return this.http.get(`${this.baseUri}`);
  }

  // Get task
  gettask(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
    )
  }

    // Update task
    updatetask(id, data): Observable<any> {
      let url = `${this.baseUri}/update/${id}`;
      return this.http.put(url, data, { headers: this.headers });
    }
  
    // Delete task
    deletetask(id): Observable<any> {
      let url = `${this.baseUri}/delete/${id}`;
      return this.http.delete(url, { headers: this.headers });
    }
}
