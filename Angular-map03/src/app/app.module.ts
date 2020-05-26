import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core'; //importa questa libreria

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot( {apiKey: 'INSERISCI_LA_TUA_API_KEY'} )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
