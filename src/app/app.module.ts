import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { HrisMenuModule } from '@iapps/hris-menu';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    HttpClientModule,
    HrisMenuModule,
    NgMatSearchBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
