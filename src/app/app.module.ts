import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

import { HrisMenuModule } from '@iapps/hris-menu';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RoutingModule, HttpClientModule, HrisMenuModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
