import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BooksRoutingModule } from './books-routing.module';
import { MaterialModule } from '@angular/material';
import { BooksPreviewComponent } from './components/books-preview/books-preview.component';
import { BooksService } from './services/books.service';

@NgModule({
  imports     : [
    CommonModule,
    MaterialModule.forRoot(),
    BooksRoutingModule
  ],
  declarations: [BooksListComponent, BooksPreviewComponent],
  providers   : [BooksService]
})
export class BooksModule {
}
