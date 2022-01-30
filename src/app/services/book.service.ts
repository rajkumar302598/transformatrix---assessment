import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(public http: HttpClient) {}

  bookList(value) {
    return this.http.get(`http://openlibrary.org/search.json?q=${value}`).pipe(
      catchError((errorRes) => {
        return throwError(errorRes);
      })
    );
  }

  bookDetails(value) {
    return this.http.get(`https://openlibrary.org/books/${value}.json`).pipe(
      catchError((errorRes) => {
        return throwError(errorRes);
      })
    );
  }
}
 

