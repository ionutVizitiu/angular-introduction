import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector   : 'a2anais-book-show',
  templateUrl: './book-show.component.html',
  styleUrls  : ['./book-show.component.scss']
})
export class BookShowComponent implements OnInit {
  book: Book;
  bookClone: Book;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.book = this.route.snapshot.data['book'];
    this.cloneBook();
  }

  updateBook(): void {
    this.book = this.bookClone;
  }

  cloneBook(): void {
    this.bookClone = new Object(this.book) as Book;
  }
}
