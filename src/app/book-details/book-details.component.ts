import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  bookID: any; // For store the query param into local variable
  bookDetails: any; // For store the API value into local variable
  constructor(
    private route: ActivatedRoute, // this is router Dependency Injection
    private bookService: BookService // this is service Dependency Injection
  ) {}

  ngOnInit() {
    // To get Query params 
    this.route.queryParamMap.subscribe((data) => {
      this.bookID = (data as any).params.bookId;
    });

    // this is API call for to get the book details
    this.bookService.bookDetails(this.bookID).subscribe((response: any) => {
      this.bookDetails = response;
    });
  }
}
