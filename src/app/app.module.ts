import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBQhZsNmsatyKY_2URo8nuLqnm5SD3cmfs",
  authDomain: "businesscontacts-927a8.firebaseapp.com",
  databaseURL: "https://businesscontacts-927a8.firebaseio.com",
  storageBucket: "businesscontacts-927a8.appspot.com",
  messagingSenderId: "1069750891452"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
