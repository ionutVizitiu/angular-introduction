import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector   : 'a2anais-books-list',
  templateUrl: './books-list.component.html',
  styleUrls  : ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit, OnDestroy {
  listSubs: Subscription;
  booksList: Book[];
  asyncBooksList: Observable<Book[]>;
  selectedBook: Book;
  myColor: string     = 'yellow';
  private searchTerms = new Subject<string>();

  constructor(private service: BooksService) {
  }

  ngOnInit() {
    this.getList();
    this.getAsyncList();
    this.debounceInput();
  }

  /** EXAMPLE 1
   * subscribe to Observable and get the list of items here
   */
  getList(): void {
    this.listSubs = this.service.getListAsObservable().subscribe(
      (items: Book[]) => {
        this.booksList = items;
        console.log('books list', this.booksList);
      },
      error => console.log('Something went wrong')
    );
  }

  /**  EXAMPLE 2
   * return Observable and use async pipe in the view
   */
  getAsyncList(): void {
    this.asyncBooksList = this.service.getListAsObservable();
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

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  debounceInput(): void {
    this.asyncBooksList = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.service.search(term)
        // or the observable of empty books if there was no search term
        : Observable.of<Book[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Book[]>([]);
      });
  }
}
