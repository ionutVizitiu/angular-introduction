import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';
import { BooksRoutingModule } from './books-routing.module';

import { BooksService } from './services/books.service';
import { BookResolver } from './resolvers/book.resolver';

import { BooksListComponent } from './components/books-list/books-list.component';
import { BookPreviewComponent } from './components/book-preview/book-preview.component';
import { BookShowComponent } from './components/book-show/book-show.component';

@NgModule({
  imports     : [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot(),
    BooksRoutingModule
  ],
  declarations: [BooksListComponent, BookPreviewComponent, BookShowComponent],
  providers   : [BooksService, BookResolver]
})
export class BooksModule {
}
