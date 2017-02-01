import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ParentComponent } from "./components/parent/parent.component";
import { NoContentComponent } from './components/no-content/no-content.component';

const routes: Routes = [
  {
    path      : '',
    redirectTo: '/dashboard',
    pathMatch : 'full'
  },
  {
    path     : 'dashboard',
    component: ParentComponent
  },
  {
    path        : 'books',
    loadChildren: 'app/books/books.module#BooksModule',
    data        : {preload: true}
  },
  {
    path     : '**',
    component: NoContentComponent
  }
];

@NgModule({
  imports  : [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports  : [RouterModule],
  providers: []
})

export class A2appRoutingModule {
}
