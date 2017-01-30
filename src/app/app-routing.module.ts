import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from "./components/parent/parent.component";
import { NoContentComponent } from './components/no-content/no-content.component';

const routes: Routes = [
  {
    path      : '',
    redirectTo: 'dashboard',
    pathMatch : 'full'
  },
  {
    path     : 'dashboard',
    component: ParentComponent
  },
  {
    path     : '**',
    component: NoContentComponent
  }
];

@NgModule({
  imports  : [RouterModule.forRoot(routes)],
  exports  : [RouterModule],
  providers: []
})

export class A2appRoutingModule {
}
