import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { A2appRoutingModule } from './app-routing.module';

import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { NoContentComponent } from './components/no-content/no-content.component';
import { ParentComponent } from './components/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    NoContentComponent,
    ParentComponent
  ],
  imports     : [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    MaterialModule.forRoot(),
    A2appRoutingModule
  ],
  providers   : [],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
