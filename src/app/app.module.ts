import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { NoContentComponent } from './components/no-content/no-content.component';
import { ParentComponent } from './components/parent/parent.component';
import { A2appRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';

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
    MaterialModule.forRoot(),
    A2appRoutingModule
  ],
  providers   : [],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
