import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';
import { Response, Http } from '@angular/http';

@Injectable()
export class BooksService {

  constructor(private _http: Http) {
  }

  booksList: Book[] = [
    {
      id              : 1,
      title           : 'Book 1',
      price           : 10,
      shortDescription: 'This is a short description for Book 1',
      description     : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla congue augue eu cursus. Nunc massa purus, sagittis a vestibulum in, semper eu dolor. Donec in laoreet arcu. Sed tempor leo et augue hendrerit, id sagittis orci mollis. Fusce auctor iaculis est, ut elementum libero consectetur in. Aliquam maximus est vitae elementum blandit. Vivamus ultrices varius consequat.'
    },
    {
      id              : 2,
      title           : 'Book 2',
      price           : 15,
      shortDescription: 'This is a short description for Book 2',
      description     : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla congue augue eu cursus. Nunc massa purus, sagittis a vestibulum in, semper eu dolor. Donec in laoreet arcu. Sed tempor leo et augue hendrerit, id sagittis orci mollis. Fusce auctor iaculis est, ut elementum libero consectetur in. Aliquam maximus est vitae elementum blandit. Vivamus ultrices varius consequat.'
    },
    {
      id              : 3,
      title           : 'Book 3',
      price           : 120,
      shortDescription: 'This is a short description for Book 3',
      description     : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla congue augue eu cursus. Nunc massa purus, sagittis a vestibulum in, semper eu dolor. Donec in laoreet arcu. Sed tempor leo et augue hendrerit, id sagittis orci mollis. Fusce auctor iaculis est, ut elementum libero consectetur in. Aliquam maximus est vitae elementum blandit. Vivamus ultrices varius consequat.'
    },
    {
      id              : 4,
      title           : 'Book 4',
      price           : 10,
      shortDescription: 'This is a short description for Book 4',
      description     : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla congue augue eu cursus. Nunc massa purus, sagittis a vestibulum in, semper eu dolor. Donec in laoreet arcu. Sed tempor leo et augue hendrerit, id sagittis orci mollis. Fusce auctor iaculis est, ut elementum libero consectetur in. Aliquam maximus est vitae elementum blandit. Vivamus ultrices varius consequat.'
    },
    {
      id              : 5,
      title           : 'Book 5',
      price           : 5,
      shortDescription: 'This is a short description for Book 5',
      description     : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla congue augue eu cursus. Nunc massa purus, sagittis a vestibulum in, semper eu dolor. Donec in laoreet arcu. Sed tempor leo et augue hendrerit, id sagittis orci mollis. Fusce auctor iaculis est, ut elementum libero consectetur in. Aliquam maximus est vitae elementum blandit. Vivamus ultrices varius consequat.'
    }
  ];

  getListAsObservable(): Observable<Book[]> {
    return Observable.of(this.booksList as Book[]);
  }


  getItemAsObservable(id: number): Observable<Book> {
    return Observable.of(this.booksList.find(book => book.id === id) as Book);
  }

  httpObservable(data: any): Observable<Response> {
    return this._http.get('url/path', data);
  }

  httpPromise(data): Promise<Book> {
    return this._http.get('url/path', data).toPromise();
    // .then()
    // .catch();
  }
}
