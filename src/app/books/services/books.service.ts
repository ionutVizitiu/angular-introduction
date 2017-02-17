import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';

@Injectable()
export class BooksService {
  constructor(private _http: Http) {
  }

  booksList: Book[] = [
    {
      id              : 1,
      title           : 'A Field Guide to American Houses',
      price           : 10,
      shortDescription: 'This is a short description for Book 1',
      description     : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla congue augue eu cursus. Nunc massa purus, sagittis a vestibulum in, semper eu dolor. Donec in laoreet arcu. Sed tempor leo et augue hendrerit, id sagittis orci mollis. Fusce auctor iaculis est, ut elementum libero consectetur in. Aliquam maximus est vitae elementum blandit. Vivamus ultrices varius consequat.'
    },
    {
      id              : 2,
      title           : 'The LEGO Architect',
      price           : 15,
      shortDescription: 'This is a short description for Book 2',
      description     : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla congue augue eu cursus. Nunc massa purus, sagittis a vestibulum in, semper eu dolor. Donec in laoreet arcu. Sed tempor leo et augue hendrerit, id sagittis orci mollis. Fusce auctor iaculis est, ut elementum libero consectetur in. Aliquam maximus est vitae elementum blandit. Vivamus ultrices varius consequat.'
    },
    {
      id              : 3,
      title           : 'Building Old Cambridge: Architecture',
      price           : 120,
      shortDescription: 'This is a short description for Book 3',
      description     : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla congue augue eu cursus. Nunc massa purus, sagittis a vestibulum in, semper eu dolor. Donec in laoreet arcu. Sed tempor leo et augue hendrerit, id sagittis orci mollis. Fusce auctor iaculis est, ut elementum libero consectetur in. Aliquam maximus est vitae elementum blandit. Vivamus ultrices varius consequat.'
    },
    {
      id              : 4,
      title           : 'Modern Architecture Since 1900',
      price           : 10,
      shortDescription: 'This is a short description for Book 4',
      description     : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla congue augue eu cursus. Nunc massa purus, sagittis a vestibulum in, semper eu dolor. Donec in laoreet arcu. Sed tempor leo et augue hendrerit, id sagittis orci mollis. Fusce auctor iaculis est, ut elementum libero consectetur in. Aliquam maximus est vitae elementum blandit. Vivamus ultrices varius consequat.'
    },
    {
      id              : 5,
      title           : 'The Mosques of Egypt',
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

  search(term: string): Observable<Book[]> {
    let regex = new RegExp(`${term}`, 'gi');
    return Observable.of(this.booksList.filter(book => book.title.match(regex)) as Book[]);
  }
}
