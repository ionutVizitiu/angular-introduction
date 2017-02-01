import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { BooksListComponent } from './components/books-list/books-list.component';
import { BookShowComponent } from './components/book-show/book-show.component';
import { BookResolver } from './resolvers/book.resolver';

const booksRoutes: Routes = [
  {
    path     : '',
    component: BooksListComponent,
  },
  {
    path     : ':id',
    component: BookShowComponent,
    resolve  : {
      book: BookResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(booksRoutes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {
}