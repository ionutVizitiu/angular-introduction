import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BooksRoutingModule } from './books-routing.module';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports     : [
    CommonModule,
    MaterialModule.forRoot(),
    BooksRoutingModule
  ],
  declarations: [BooksListComponent]
})
export class BooksModule {
}
