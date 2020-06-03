import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { AppComponent }   from './app.component';
import { AgmCoreModule}   from '@agm/core'; // <---Questa dovrebbe già essere presente
import {HttpClientModule} from '@angular/common/http'; // <---


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyB6mXdlANO54DFjxLwxFfLJRcbHW8SrdoQ'})   ,     // <---ricorda la virgola
    HttpClientModule // <---
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
