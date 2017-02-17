import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../../models/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector   : 'a2anais-book-show',
  templateUrl: './book-show.component.html',
  styleUrls  : ['./book-show.component.scss']
})
export class BookShowComponent implements OnInit, OnDestroy {
  book: Book;
  bookClone: Book;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.book = this.route.snapshot.data['book'];
    console.log('initial book', this.book);
    this.cloneBook();
  }

  cloneBook(): void {
    this.bookClone = Object.assign({}, this.book);
  }

  updateBook(): void {
    this.book = this.bookClone;
    console.log('updated book', this.book);
    this.router.navigateByUrl('/books');
  }

  ngOnDestroy(): void {
    delete this.bookClone;
    console.log('bookClone deleted');
  }
}
