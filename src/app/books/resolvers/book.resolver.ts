import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { BooksService } from '../services/books.service';

@Injectable()
export class BookResolver implements Resolve<any> {
  constructor(private service: BooksService) {

  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.service.getItem(+route.params['id']);
  }
}
