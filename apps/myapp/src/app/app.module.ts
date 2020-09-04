import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NxModule } from '@nrwl/angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NxModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
