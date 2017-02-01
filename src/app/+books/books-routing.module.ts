import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { BooksListComponent } from './components/books-list/books-list.component';

const booksRoutes: Routes = [
  {
    path     : '',
    component: BooksListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(booksRoutes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {
}