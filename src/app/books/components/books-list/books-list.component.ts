import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book';

@Component({
  selector   : 'a2anais-books-list',
  templateUrl: './books-list.component.html',
  styleUrls  : ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit, OnDestroy {
  listSubs: Subscription;
  booksList: Book[];
  asyncBooksList: Observable<any>;
  selectedBook: Book;

  constructor(private service: BooksService) {
  }

  ngOnInit() {
    this.getList();
    this.getAsyncList();
  }

  /** EXAMPLE 1
   * subscribe to Observable and get the list of items here
   */
  getList(): void {
    this.listSubs = this.service.getList().subscribe(
      (items: Book[]) => this.booksList = items,
      error => console.log('Something went wrong')
    );
  }

  /**  EXAMPLE 2
   * return Observable and use async pipe in the view
   */
  getAsyncList(): void {
    this.asyncBooksList = this.service.getList();
  }

  selectBook(book: Book = undefined): void {
    this.selectedBook = book;
  }

  /**
   * destroy Subscription
   */
  ngOnDestroy(): void {
    if (this.listSubs) {
      this.listSubs.unsubscribe();
    }
  }
}
