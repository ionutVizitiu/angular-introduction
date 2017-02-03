import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Subscription, Observable } from 'rxjs';
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

  constructor(private service: BooksService) {
  }

  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this.listSubs = this.service.getListAsObservable().subscribe(
      (items: Book[]) => {
        this.booksList = items;
        console.log('books list', this.booksList);
      },
      error => error
    );
  }

  getAsyncList(): void {
    this.asyncBooksList = this.service.getListAsObservable();
  }

  ngOnDestroy(): void {
    if (this.listSubs) {
      this.listSubs.unsubscribe();
    }
  }
}
