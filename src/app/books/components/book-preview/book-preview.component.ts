import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector   : 'a2anais-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls  : ['./book-preview.component.scss']
})
export class BookPreviewComponent implements OnInit {
  @Input() book: Book;

  constructor() {
  }

  ngOnInit() {
  }
}
