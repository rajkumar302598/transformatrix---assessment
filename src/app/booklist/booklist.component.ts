import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss'],
})
export class BooklistComponent implements OnInit {
  bookList = []; // For store the API value into local variable
  @ViewChild('searchVal') searchVal: ElementRef; // view-child to get the template reference variable value
  constructor(
    private bookService: BookService, // this is service Dependency Injection
    private router: Router, // this is router Dependency Injection
    private cd: ChangeDetectorRef // this is for detect the changes when the content is updated
  ) {}

  ngOnInit(): void {}

  showBooks(searchVal) {
    // if the value is empty return an alert
    if (searchVal.trim() == '') {
      return window.alert('Enter Something to Find books....');
    }
    // this is API call for to get the book list data
    this.bookService.bookList(searchVal).subscribe((response: any) => {
      this.bookList = response.docs;
      this.cd.detectChanges();
    });
  }

  readBook(key) {
    // if the book id is undefined return an alert
    if (key == undefined) {
      return window.alert('There is no cover_edition_key Found...');
    }
    // to navigate the another router which is shown in the data of particular book
    this.router.navigate(['/bookDetails'], {
      queryParams: {
        bookId: key,
      },
    });
  }

  // this method is rest the data
  clear() {
    this.searchVal.nativeElement.value = '';
    this.bookList.length = 0;
  }
}
